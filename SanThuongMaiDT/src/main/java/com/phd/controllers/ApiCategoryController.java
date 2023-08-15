/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.phd.controllers;

import com.phd.pojo.Category;
import com.phd.service.CategoryService;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 *
 * @author dat98
 */
@RestController
@RequestMapping("/api")
public class ApiCategoryController {

    @Autowired
    private CategoryService categoryService;
    
    @GetMapping("/categories")
    public ResponseEntity<List<Category>> list() {
           return new ResponseEntity<>(this.categoryService.getCates(), HttpStatus.OK);
    }
}
