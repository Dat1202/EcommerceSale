package com.phd.pojo;

import com.phd.pojo.Category;
import com.phd.pojo.Comments;
import com.phd.pojo.OrderDetails;
import com.phd.pojo.Store;
import javax.annotation.processing.Generated;
import javax.persistence.metamodel.SetAttribute;
import javax.persistence.metamodel.SingularAttribute;
import javax.persistence.metamodel.StaticMetamodel;

@Generated(value="org.eclipse.persistence.internal.jpa.modelgen.CanonicalModelProcessor", date="2023-09-10T00:30:57", comments="EclipseLink-2.7.12.v20230209-rNA")
@StaticMetamodel(Product.class)
public class Product_ { 

    public static volatile SetAttribute<Product, OrderDetails> orderDetailsSet;
    public static volatile SingularAttribute<Product, String> image;
    public static volatile SetAttribute<Product, Comments> commentsSet;
    public static volatile SingularAttribute<Product, Long> price;
    public static volatile SingularAttribute<Product, String> name;
    public static volatile SingularAttribute<Product, String> description;
    public static volatile SingularAttribute<Product, Integer> id;
    public static volatile SingularAttribute<Product, Store> storeId;
    public static volatile SingularAttribute<Product, Category> categoryId;

}