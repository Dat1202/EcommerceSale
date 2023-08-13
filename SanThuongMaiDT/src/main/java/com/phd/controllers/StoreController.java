/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.phd.controllers;

import com.phd.service.StoreService;
import java.util.Map;
import org.hibernate.Hibernate;
import org.hibernate.Session;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

/**
 *
 * @author dat98
 */
@Controller
public class StoreController {

    @Autowired
    private StoreService storeService;

//    @RequestMapping("/{id}")
//    public String store(Model model, @RequestParam Map<String, String> params, @PathVariable("id") int id) {
//        model.addAttribute("storehi", this.storeService.getId());
//
//        return "store";
//    }

    @GetMapping("/store/{id}")
    public String store(Model model, @RequestParam Map<String, String> params, @PathVariable(value  = "id" ) int id) {
        model.addAttribute("store", this.storeService.getProdFromStore(id, params));

        return "store";
    }
}
