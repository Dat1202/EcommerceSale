/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Interface.java to edit this template
 */
package com.phd.service;

import com.phd.pojo.Category;

/**
 *
 * @author dat98
 */
public interface AdminService {

    boolean addCate(Category Category);

    Category getCategoryById(int id);
}
