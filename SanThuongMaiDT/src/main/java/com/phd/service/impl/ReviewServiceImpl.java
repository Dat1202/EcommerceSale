/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.phd.service.impl;

import com.phd.pojo.Review;
import com.phd.repository.ReviewRepository;
import com.phd.service.ReviewService;
import java.util.Date;
import java.util.List;
import java.util.Map;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 *
 * @author dat98
 */@Service

public class ReviewServiceImpl implements ReviewService {

    @Autowired
    private ReviewRepository reviewRepo;

    @Override
    public List<Review> getReviews(int storeId, Map<String, String> params) {
        return this.reviewRepo.getReviews(storeId, params);
    }

    @Override
    public Review addReview(Review r) {
        r.setCreatedAt(new Date());

//        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
//        User u = this.userRepo.getUserByUsername(authentication.getName());
//        r.setUserId(u);

        return this.reviewRepo.addReview(r);
    }

    @Override
    public double avgStarReview(int storeId) {
        return this.reviewRepo.avgStarReview(storeId);
    }

}
