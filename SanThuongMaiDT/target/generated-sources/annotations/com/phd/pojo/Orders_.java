package com.phd.pojo;

import com.phd.pojo.OrderDetails;
import com.phd.pojo.User;
import java.util.Date;
import javax.annotation.Generated;
import javax.persistence.metamodel.SetAttribute;
import javax.persistence.metamodel.SingularAttribute;
import javax.persistence.metamodel.StaticMetamodel;

@Generated(value="EclipseLink-2.7.12.v20230209-rNA", date="2023-09-04T16:44:03")
@StaticMetamodel(Orders.class)
public class Orders_ { 

    public static volatile SetAttribute<Orders, OrderDetails> orderDetailsSet;
    public static volatile SingularAttribute<Orders, Integer> id;
    public static volatile SingularAttribute<Orders, Date> orderDate;
    public static volatile SingularAttribute<Orders, User> userId;

}