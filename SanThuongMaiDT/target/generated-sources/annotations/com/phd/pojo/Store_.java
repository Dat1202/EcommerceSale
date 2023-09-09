package com.phd.pojo;

import com.phd.pojo.Product;
import com.phd.pojo.Review;
import com.phd.pojo.StoreCategory;
import com.phd.pojo.User;
import javax.annotation.processing.Generated;
import javax.persistence.metamodel.SetAttribute;
import javax.persistence.metamodel.SingularAttribute;
import javax.persistence.metamodel.StaticMetamodel;

@Generated(value="org.eclipse.persistence.internal.jpa.modelgen.CanonicalModelProcessor", date="2023-09-10T00:30:57", comments="EclipseLink-2.7.12.v20230209-rNA")
@StaticMetamodel(Store.class)
public class Store_ { 

    public static volatile SingularAttribute<Store, String> name;
    public static volatile SetAttribute<Store, Review> reviewSet;
    public static volatile SingularAttribute<Store, String> description;
    public static volatile SingularAttribute<Store, String> location;
    public static volatile SingularAttribute<Store, Integer> id;
    public static volatile SingularAttribute<Store, User> userId;
    public static volatile SetAttribute<Store, StoreCategory> storeCategorySet;
    public static volatile SingularAttribute<Store, String> status;
    public static volatile SetAttribute<Store, Product> productSet;

}