package com.phd.pojo;

import com.phd.pojo.Category;
import com.phd.pojo.Store;
import javax.annotation.Generated;
import javax.persistence.metamodel.SingularAttribute;
import javax.persistence.metamodel.StaticMetamodel;

@Generated(value="EclipseLink-2.7.12.v20230209-rNA", date="2023-09-04T16:44:03")
@StaticMetamodel(StoreCategory.class)
public class StoreCategory_ { 

    public static volatile SingularAttribute<StoreCategory, Category> cateId;
    public static volatile SingularAttribute<StoreCategory, Integer> id;
    public static volatile SingularAttribute<StoreCategory, Store> storeId;

}