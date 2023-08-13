/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Interface.java to edit this template
 */
package com.phd.service;

import com.phd.pojo.Store;
import java.util.List;
import java.util.Map;

/**
 *
 * @author dat98
 */
public interface StoreService {

    List<Object[]> getProdFromStore(int id, Map<String, String> params);

}
