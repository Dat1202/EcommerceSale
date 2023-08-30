package com.phd.pojo;

import com.phd.pojo.Category;
import com.phd.pojo.Store;
import javax.annotation.processing.Generated;
import javax.persistence.metamodel.SingularAttribute;
import javax.persistence.metamodel.StaticMetamodel;

@Generated(value="org.eclipse.persistence.internal.jpa.modelgen.CanonicalModelProcessor", date="2023-08-30T21:44:13", comments="EclipseLink-2.7.12.v20230209-rNA")
@StaticMetamodel(StoreCategory.class)
public class StoreCategory_ { 

    public static volatile SingularAttribute<StoreCategory, Category> cateId;
    public static volatile SingularAttribute<StoreCategory, Integer> id;
    public static volatile SingularAttribute<StoreCategory, Store> storeId;

}