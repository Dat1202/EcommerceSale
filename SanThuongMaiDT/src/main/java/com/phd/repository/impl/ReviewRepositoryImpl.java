/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.phd.repository.impl;

import com.phd.pojo.Review;
import com.phd.repository.ReviewRepository;
import java.text.DecimalFormat;
import java.util.List;
import javax.persistence.Query;
import org.hibernate.HibernateException;
import org.hibernate.Session;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.orm.hibernate5.LocalSessionFactoryBean;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

/**
 *
 * @author dat98
 */
@Repository
@Transactional
public class ReviewRepositoryImpl implements ReviewRepository {

    @Autowired
    private LocalSessionFactoryBean factory;

    @Override
    public List<Review> getReviews(int storeId) {
        Session s = this.factory.getObject().getCurrentSession();
        Query q = s.createQuery("From Review Where storeId.id=:id ORDER BY id desc");
        q.setParameter("id", storeId);

        return q.getResultList();
    }

    @Override
    public Review addReview(Review r) {
        Session s = this.factory.getObject().getCurrentSession();
        try {
            s.save(r);
            return r;
        } catch (HibernateException ex) {
            ex.printStackTrace();
            return null;
        }
    }

    @Override
    public double avgStarReview(int storeId) {
        Session s = this.factory.getObject().getCurrentSession();
        Query q = s.createQuery("select avg(CASE WHEN r.star <> 0 THEN r.star ELSE null END) from Review r where r.storeId.id=:id");
        q.setParameter("id", storeId);

        Double average = (Double) q.getSingleResult();
        if (average != null) {
            DecimalFormat df = new DecimalFormat("#.##");
            return Double.parseDouble(df.format(average));
        } else {
            return 0.0;
        }
    }

}
