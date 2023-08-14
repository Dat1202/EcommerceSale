/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.phd.controllers;

import com.phd.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;


/**
 *
 * @author admin
 */
@RestController
@RequestMapping("/api")
public class ApiProductController {
    
    @Autowired
    private ProductService productService; 
    
    
    @DeleteMapping("/products/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void deleteProduct(@PathVariable (value="id") int id){
        this.productService.deleteProduct(id);
    }
    
//    @GetMapping("/products")
//    @CrossOrigin
//    public ResponseEntity<List<Product>> list(@RequestParam Map<String, String> params) {
//        return new ResponseEntity<>(this.prodService.getProducts(params), HttpStatus.OK);
//    }
}
