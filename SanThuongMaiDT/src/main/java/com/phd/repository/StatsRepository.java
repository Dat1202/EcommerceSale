/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Interface.java to edit this template
 */
package com.phd.repository;

import java.util.List;
import java.util.Map;

public interface StatsRepository {
    List<Object[]> countProductByCate();
    List<Object[]> statsByProduct(Map<String, String> params);
    List<Object[]> statsByCate(Map<String, String> params);
    List<Object[]> statsNumberProductByCate();
    List<Object[]> statsRevenueInEachStore();
}
