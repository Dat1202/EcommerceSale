/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.phd.repository.impl;

import com.phd.pojo.Comments;
import com.phd.repository.CommentRepository;
import java.util.List;
import javax.persistence.Query;
import org.springframework.transaction.annotation.Transactional;

import org.hibernate.HibernateException;
import org.hibernate.Session;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.PropertySource;
import org.springframework.orm.hibernate5.LocalSessionFactoryBean;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

/**
 *
 * @author 84355
 */
@Repository
@Transactional
public class CommentRepositoryImpl implements CommentRepository{
    @Autowired
    private LocalSessionFactoryBean factory;

    @Override
    public List<Comments> getComments(int productId) {
        Session s = this.factory.getObject().getCurrentSession();
        Query q = s.createQuery("From Comments Where productId.id=:id");
//        Query q = s.createQuery("select * from Product where storeId.id=:id");

        q.setParameter("id", productId);
        
        return q.getResultList();
    }

    @Override
    public Comments addComment(Comments c) {
        Session s = this.factory.getObject().getCurrentSession();
        try {
            s.save(c);
            return c;
        } catch (HibernateException ex) {
            ex.printStackTrace();
            return null;
        }
    }
    
}
