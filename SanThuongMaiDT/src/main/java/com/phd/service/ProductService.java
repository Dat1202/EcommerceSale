/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Interface.java to edit this template
 */
package com.phd.service;

import com.phd.pojo.Product;
import java.util.List;
import java.util.Map;

/**
 *
 * @author dat98
 */
public interface ProductService {

    List<Product> getProducts(Map<String, String> params);

    int countProduct();

    boolean addOrUpdateProduct(Product p);

    Product getProductById(int id);

    boolean deleteProduct(int id);
}
