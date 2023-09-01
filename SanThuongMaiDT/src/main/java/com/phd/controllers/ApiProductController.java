/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.phd.controllers;

import com.phd.pojo.Product;
import com.phd.service.ProductService;
import com.phd.service.StoreService;
import java.util.List;
import java.util.Map;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
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

    @Autowired
    private StoreService storeService;

    @DeleteMapping("/products/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void deleteProduct(@PathVariable(value = "id") int id) {
        this.productService.deleteProduct(id);
    }

    @GetMapping("/products")
    @CrossOrigin
    public ResponseEntity<List<Product>> list(@RequestParam Map<String, String> params) {
        return new ResponseEntity<>(this.productService.getProducts(params), HttpStatus.OK);
    }
    
    @GetMapping("/products-asc")
    @CrossOrigin
    public ResponseEntity<List<Product>> listAsc(@RequestParam Map<String, String> params) {
        return new ResponseEntity<>(this.productService.getProductAsc(params), HttpStatus.OK);
    }

    @GetMapping(path = "/store-products/{id}")
    @CrossOrigin
    public ResponseEntity<?> getProdFromStore(@PathVariable(value = "id") int id, @RequestParam Map<String, String> params) {
        return new ResponseEntity<>(this.storeService.getProdFromStore(id, params), HttpStatus.OK);
    }
}
