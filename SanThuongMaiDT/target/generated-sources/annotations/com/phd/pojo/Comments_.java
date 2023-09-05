package com.phd.pojo;

import com.phd.pojo.Product;
import com.phd.pojo.User;
import java.util.Date;
import javax.annotation.processing.Generated;
import javax.persistence.metamodel.SingularAttribute;
import javax.persistence.metamodel.StaticMetamodel;

@Generated(value="org.eclipse.persistence.internal.jpa.modelgen.CanonicalModelProcessor", date="2023-09-05T15:00:35", comments="EclipseLink-2.7.12.v20230209-rNA")
@StaticMetamodel(Comments.class)
public class Comments_ { 

    public static volatile SingularAttribute<Comments, Date> createdAt;
    public static volatile SingularAttribute<Comments, Product> productId;
    public static volatile SingularAttribute<Comments, Integer> id;
    public static volatile SingularAttribute<Comments, User> userId;
    public static volatile SingularAttribute<Comments, String> content;

}