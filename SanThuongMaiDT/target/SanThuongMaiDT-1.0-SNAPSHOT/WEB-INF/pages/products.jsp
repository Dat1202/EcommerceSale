

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@taglib prefix="form" uri="http://www.springframework.org/tags/form" %>

<h1 class="text-center text-info mt-1">QUẢN LÝ SẢN PHẨM</h1>

<c:url value="/products" var="action" />
<form:form modelAttribute="product" method="post" action="${action}" enctype="multipart/form-data">
    <form:hidden path="id" />
    <form:hidden path="image" />
    <form:errors path="*" element="div" class="text text-danger" />
    <div class="form-floating mb-3 mt-3">
        <form:input type="text" class="form-control" path="name" id="name" 
                    placeholder="Tên sản phẩm" name="name" />
        <label for="name">Tên sản phẩm</label>
        <form:errors path="name" element="div" class="text text-danger" />
    </div>
    <div class="form-floating mb-3 mt-3">
        <form:input type="text" class="form-control" path="price" id="price" 
                    placeholder="Gía sản phẩm" name="price" />
        <label for="name">Gía sản phẩm</label>
    </div>
    <div class="form-floating">
        <form:select class="form-select" id="cate" name="cate" path="categoryId">
            <c:forEach items="${categories}" var="c">
                <c:choose>
                    <c:when test="${c.id == product.categoryId.id}">
                        <option value="${c.id}" selected>${c.name}</option>
                    </c:when>
                    <c:otherwise>
                        <option value="${c.id}">${c.name}</option>
                    </c:otherwise>
                </c:choose>
            </c:forEach>  
        </form:select>
        <label for="cate" class="form-label">Danh mục sản phẩm</label>
    </div>
    <div class="form-floating mb-3 mt-3">
        <form:input type="file" class="form-control" path="file" id="file" 
                    placeholder="Ảnh sản phẩm"  />
        <label for="file">Ảnh sản phẩm</label>
    </div>
    <div class="form-floating mb-3 mt-3">
        <button class="btn btn-info mt-1" type="submit">
            <c:choose>
                <c:when test="${product.id != null}">
                    Cập nhật sản phẩm
                </c:when>
                <c:otherwise>
                    Thêm sản phẩm
                </c:otherwise>
            </c:choose>
        </button>
    </div>
</form:form>