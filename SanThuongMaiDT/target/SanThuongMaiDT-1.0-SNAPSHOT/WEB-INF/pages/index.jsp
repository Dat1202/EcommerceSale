
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@page contentType="text/html" pageEncoding="UTF-8"%>


<c:choose>
    <c:when test="${user.userRole == 'ROLE_STORE'}">
        <h1 class="text-center">Quản lí cửa hàng</h1>
        <div class="">
            <div 
                style = "display: inline-block;padding: 100px;font-size:20px;box-shadow: 0 1px 3.125rem 0 rgba(0, 0, 0, 0.2);
                    border-left: 5px solid #454592;" 
                class="m-5">Số lượng sản phẩm: ${counerProduct}
                <a style = "font-size:12px;" href="<c:url value="/store/products"/>"><i class="fa-solid fa-chevron-right"></i></a>
            </div>
            
<!--            <div 
                style = "display: inline-block;padding: 100px;font-size:20px;box-shadow: 0 1px 3.125rem 0 rgba(0, 0, 0, 0.2);
                    border-left: 5px solid #454592;" 
                class="">Số lượng sản phẩm: ${counerProduct}
                <a style = "font-size:12px;" href="<c:url value="/store/products"/>"><i class="fa-solid fa-chevron-right"></i></a>
            </div>-->
            
        </div>
    </c:when>
    <c:when test="${user.userRole == 'ROLE_STAFF'}">
        <div>Quản lí nhân viên</div>
    </c:when>
</c:choose>
