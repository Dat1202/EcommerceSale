package com.phd.pojo;

import com.phd.pojo.Store;
import com.phd.pojo.User;
import java.util.Date;
import javax.annotation.processing.Generated;
import javax.persistence.metamodel.SingularAttribute;
import javax.persistence.metamodel.StaticMetamodel;

@Generated(value="org.eclipse.persistence.internal.jpa.modelgen.CanonicalModelProcessor", date="2023-09-05T16:08:57", comments="EclipseLink-2.7.12.v20230209-rNA")
@StaticMetamodel(Review.class)
public class Review_ { 

    public static volatile SingularAttribute<Review, String> note;
    public static volatile SingularAttribute<Review, Date> createdAt;
    public static volatile SingularAttribute<Review, Integer> star;
    public static volatile SingularAttribute<Review, Integer> id;
    public static volatile SingularAttribute<Review, Store> storeId;
    public static volatile SingularAttribute<Review, User> userId;

}