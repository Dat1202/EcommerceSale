/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.phd.repository.impl;

import com.phd.pojo.User;
import com.phd.repository.UserRepository;
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
public class UserRepositoryImpl implements UserRepository {

    @Autowired
    private LocalSessionFactoryBean factory;

    @Override
    public User getUserByUsername(String username) {
        Session s = this.factory.getObject().getCurrentSession();
        Query q = s.createQuery("From User Where username=:un");
        q.setParameter("un", username);
        System.out.println(username);
        return (User) q.getSingleResult();
    }

    @Override
    public User getUserById(int id) {
        Session s = this.factory.getObject().getCurrentSession();
        Query q = s.createQuery("From User Where id=:id");
        q.setParameter("id", id);
//        System.out.println(id);
        return (User) q.getSingleResult();
    }
    
    @Override
    public boolean addUser(User user) {
        Session s = this.factory.getObject().getCurrentSession();
        try {
            s.save(user);
            return true;
        }catch(HibernateException ex){
            System.err.println(ex.getMessage());
        }
        return false;
    }

}
