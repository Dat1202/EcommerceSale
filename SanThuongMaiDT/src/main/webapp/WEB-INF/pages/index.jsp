
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@page contentType="text/html" pageEncoding="UTF-8"%>


<c:choose>
    <c:when test="${user.userRole == 'ROLE_STORE'}">
        <h1 class="text-center">Quản lí cửa hàng</h1>
        <div class="">
            <div 
                class="m-5 dashboard">Số lượng sản phẩm của cửa hàng: ${countProduct}
                <a style = "font-size:12px;" href="<c:url value="/store/products"/>"><i class="fa-solid fa-chevron-right"></i></a>
            </div>
        </div>
    </c:when>
    <c:when test="${user.userRole == 'ROLE_STAFF'}">
        <div class="text-center mt-2 text">Quản lí nhân viên</div>
    </c:when>

    <c:when test="${user.userRole == 'ROLE_ADMIN'}">
        <div 
            class="m-5 dashboard">Số lượng sản phẩm: ${count}
        </div>    
    </c:when> 

</c:choose>
