/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.phd.repository.impl;

import com.phd.pojo.Category;
import com.phd.pojo.Product;
import com.phd.pojo.Store;
import com.phd.repository.StoreRepository;
import com.phd.repository.UserRepository;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import javax.persistence.Query;
import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaQuery;
import javax.persistence.criteria.Predicate;
import javax.persistence.criteria.Root;
import org.hibernate.HibernateException;
import org.hibernate.Session;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.orm.hibernate5.LocalSessionFactoryBean;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

/**
 *
 * @author dat98
 */
@Repository
@Transactional
public class StoreRepositoryImpl implements StoreRepository {

    @Autowired
    private LocalSessionFactoryBean factory;
    @Autowired
    private UserRepository userRepository;

    @Override
    public List<Object[]> getProdFromStore(int id, Map<String, String> params) {

        Session session = this.factory.getObject().getCurrentSession();
        CriteriaBuilder b = session.getCriteriaBuilder();
        CriteriaQuery<Object[]> q = b.createQuery(Object[].class);
        Root rP = q.from(Product.class);
        Root rStr = q.from(Store.class);
        Root rCate = q.from(Category.class);

        List<Predicate> predicates = new ArrayList<>();

        predicates.add(b.equal(rStr.get("id"), id));
        predicates.add(b.equal(rP.get("storeId"), rStr.get("id")));
        predicates.add(b.equal(rCate.get("id"), rP.get("categoryId")));

        if (params != null) {
            String strId = params.get("strId");
            if (strId != null && !strId.isEmpty()) {
                predicates.add(b.equal(rStr.get("id"), Integer.parseInt(strId)));
            }

            String cateId = params.get("cateId");
            if (cateId != null && !cateId.isEmpty()) {
                predicates.add(b.equal(rCate.get("id"), Integer.parseInt(cateId)));
            }
        }
        q.where(predicates.toArray(Predicate[]::new));
        q.multiselect(rP.get("id"), rP.get("image"), rP.get("name"), rP.get("price"));

        Query query = session.createQuery(q);
        return query.getResultList();
    }

//    @Override
//    public List<Store[]> getId() {
//        Session session = this.factory.getObject().getCurrentSession();
//        CriteriaBuilder b = session.getCriteriaBuilder();
//        CriteriaQuery<Store[]> q = b.createQuery(Store[].class);
//
//        Root rStr = q.from(Store.class);
//        q.select(rStr.get("id"));
//
//        Query query = session.createQuery(q);
//        return query.getResultList();
//    }
//
//    @Override
//    public int countProduct() {
//        Session session = this.factory.getObject().getCurrentSession();
//        Query q = session.createQuery("select *\n"
//                + "from Store st\n"
//                + "join StoreCategory sc\n"
//                + "on st.id = sc.store_id\n"
//                + "join category c \n"
//                + "on sc.cate_id = c.id");
//        return Integer.parseInt(q.getSingleResult().toString());
//    }
    @Override
    public boolean addStore(Store store) {
        Session s = this.factory.getObject().getCurrentSession();
        Authentication authentication
                = SecurityContextHolder.getContext().getAuthentication();

        try {
            store.setUserId(this.userRepository.getUserByUsername(authentication.getName()));
            s.save(store);
            return true;
        } catch (HibernateException ex) {
            System.err.println(ex.getMessage());
        }
        return false;
    }

}
