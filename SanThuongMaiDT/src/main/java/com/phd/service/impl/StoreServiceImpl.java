/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.phd.service.impl;

import com.phd.pojo.Store;
import com.phd.repository.StoreRepository;
import com.phd.service.StoreService;
import java.util.List;
import java.util.Map;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 *
 * @author dat98
 */
@Service
public class StoreServiceImpl implements StoreService {

    @Autowired
    private StoreRepository storeRepo;

    @Override
    public List<Object[]> getProdFromStore(int id, Map<String, String> params) {
        return this.storeRepo.getProdFromStore(id, params);
    }

    @Override
    public boolean addStore(Store store) {
        store.setStatus("pending");
        return this.storeRepo.addStore(store);
    }

    @Override
    public Store getStoreById(int id) {
        return this.storeRepo.getStoreById(id);
    }

    @Override
    public List<Object[]> getProductByStoreId(Map<String, String> params) {
        return this.storeRepo.getProductByStoreId(params);

    }

    @Override
    public List<Object[]> getCateByStoreId() {
        return this.storeRepo.getCateByStoreId();
    }

    @Override
    public int countProductByStore() {
        return this.storeRepo.countProductByStore();
    }

    @Override
    public List<Object[]> getApiInfoStore(int id) {
        return this.storeRepo.getApiInfoStore(id);
    }

    @Override
    public List<Object[]> getApiCateByStoreId(int id) {
        return this.storeRepo.getApiCateByStoreId(id);
    }

}
