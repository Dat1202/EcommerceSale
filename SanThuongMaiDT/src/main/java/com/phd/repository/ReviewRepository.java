/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Interface.java to edit this template
 */
package com.phd.repository;

import com.phd.pojo.Review;
import java.util.List;

/**
 *
 * @author dat98
 */
public interface ReviewRepository {

    List< Review> getReviews(int storeId);

    Review addReview(Review c);
    
    double avgStarReview(int storeId);
}
