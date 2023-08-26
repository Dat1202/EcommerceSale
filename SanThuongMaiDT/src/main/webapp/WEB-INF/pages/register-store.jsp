<%-- 
    Document   : registerStore
    Created on : 15 Aug 2023, 10:39:41 pm
    Author     : dat98
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@taglib prefix="form" uri="http://www.springframework.org/tags/form" %>

<c:url value="/store/register-store" var="action"/>
<form:form modelAttribute="store" method="post" action="${action}">
    <form:hidden path="status" />

    <div class="form-floating mb-3 mt-3">
        <form:input type="text" class="form-control" path="name" id="name" 
                    placeholder="Tên sản phẩm" name="name" />
        <label for="name">Tên cửa hàng</label>
    </div>

    <div class="form-floating mb-3 mt-3">
        <form:input type="text" class="form-control" path="description" id="description" 
                    placeholder="Tên sản phẩm" name="description" />
        <label for="description">Chi tiết cửa hàng</label>
    </div>

    <div class="form-floating mt-3 mb-3">
        <input type="submit" value="Đăng ký" class="btn btn-danger" />
    </div>
        
</form:form>