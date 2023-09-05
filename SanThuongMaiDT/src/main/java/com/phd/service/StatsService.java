/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Interface.java to edit this template
 */
package com.phd.service;

import java.util.List;
import java.util.Map;

/**
 *
 * @author dat98
 */

public interface StatsService {
    List<Object[]> statsByProduct(Map<String, String> params);
    List<Object[]> statsByCate(Map<String, String> params);
    List<Object[]> statsNumberProductByCate();
    List<Object[]> statsRevenueInEachStore();
    List<Object[]> statsByMonthInStore();
}
