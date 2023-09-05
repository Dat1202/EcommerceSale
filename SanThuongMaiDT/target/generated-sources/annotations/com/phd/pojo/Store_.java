package com.phd.pojo;

import com.phd.pojo.Product;
import com.phd.pojo.Review;
import com.phd.pojo.StoreCategory;
import com.phd.pojo.User;
import javax.annotation.Generated;
import javax.persistence.metamodel.SetAttribute;
import javax.persistence.metamodel.SingularAttribute;
import javax.persistence.metamodel.StaticMetamodel;

@Generated(value="EclipseLink-2.7.12.v20230209-rNA", date="2023-09-04T16:44:03")
@StaticMetamodel(Store.class)
public class Store_ { 

    public static volatile SingularAttribute<Store, String> name;
    public static volatile SetAttribute<Store, Review> reviewSet;
    public static volatile SingularAttribute<Store, String> description;
    public static volatile SingularAttribute<Store, Integer> id;
    public static volatile SingularAttribute<Store, User> userId;
    public static volatile SetAttribute<Store, StoreCategory> storeCategorySet;
    public static volatile SingularAttribute<Store, String> status;
    public static volatile SetAttribute<Store, Product> productSet;

}