package com.phd.pojo;

import com.phd.pojo.Orders;
import com.phd.pojo.Product;
import javax.annotation.processing.Generated;
import javax.persistence.metamodel.SingularAttribute;
import javax.persistence.metamodel.StaticMetamodel;

@Generated(value="org.eclipse.persistence.internal.jpa.modelgen.CanonicalModelProcessor", date="2023-09-15T01:07:49", comments="EclipseLink-2.7.12.v20230209-rNA")
@StaticMetamodel(OrderDetails.class)
public class OrderDetails_ { 

    public static volatile SingularAttribute<OrderDetails, Long> unitPrice;
    public static volatile SingularAttribute<OrderDetails, Integer> quantity;
    public static volatile SingularAttribute<OrderDetails, Product> productId;
    public static volatile SingularAttribute<OrderDetails, Orders> orderId;
    public static volatile SingularAttribute<OrderDetails, Integer> id;

}