/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.phd.controllers;

import com.phd.pojo.Store;
import com.phd.service.StoreService;
import java.util.List;
import java.util.Map;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

/**
 *
 * @author dat98
 */
@RestController
@RequestMapping("/api")
@CrossOrigin
public class ApiStoreController {

    @Autowired
    private StoreService storeService;

    @GetMapping(path="/store-info/{id}", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<?> infoStore(@PathVariable(value = "id") int id) {
        return new ResponseEntity<>(this.storeService.getApiInfoStore(id), HttpStatus.OK);
    }

//    @GetMapping(path = "/store-info/{id}", produces = MediaType.APPLICATION_JSON_VALUE)
//    @CrossOrigin
//    public ResponseEntity<Store> infoStore1(@PathVariable(value = "id") int id) {
//        return new ResponseEntity<>(this.storeService.getStoreById(id), HttpStatus.OK);
//    }

    @GetMapping("/store/{id}")
    public ResponseEntity<?> store(@RequestParam Map<String, String> params, @PathVariable(value = "id") int id) {
        return new ResponseEntity<>(this.storeService.getProdFromStore(id, params), HttpStatus.OK);
    }
}
