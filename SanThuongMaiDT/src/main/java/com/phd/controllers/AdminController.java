/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.phd.controllers;

import com.phd.pojo.Category;
import com.phd.service.AdminService;
import com.phd.service.CategoryService;
import java.util.Map;
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
@RequestMapping("/admin")
public class AdminController {

    @Autowired
    private AdminService adminService;
    @Autowired
    private CategoryService cateService;

    @GetMapping("/categories")
    public String categoryView(Model model, @RequestParam Map<String, String> params) {

        model.addAttribute("categories", this.cateService.getCates());
        return "categories";
    }

    @GetMapping("/add-categories")
    public String list(Model model) {
        model.addAttribute("categories", new Category());
        return "categories";
    }

    @GetMapping("/add-categories/{id}")
    public String update(Model model, @PathVariable(value = "id") int id) {
        model.addAttribute("categories", this.adminService.getCategoryById(id));
        return "categories";
    }

//    @PostMapping("/categories")
//    public String add(@ModelAttribute(value = "product") @Valid Product p,
//            BindingResult rs) {
//
//        if (!rs.hasErrors()) {
//            if (this.proService.addOrUpdateProduct(p) == true) {
//                return "redirect:/";
//            }
//        }
//
//        return "products";
//    }
}
