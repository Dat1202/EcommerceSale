
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<c:url value="/" var="action" />

<div class="category__container">
    <div class="grid__auto">
        <div class="grid__row">
            <div class="grid__column-2">
                <nav class="category">
                    <h3 class="category_heading"><i class="fa-solid fa-list"></i>Danh mục</h3>
                    <ul class="category-list">
                        <li class ="category-items"><a class="get-data-value" href="${action}">Tất cả</a></li>
                            <c:forEach items="${categories}" var = "c">
                                <c:url value="/" var="cateAction">
                                    <c:param name="cateId" value="${c.id}" />
                                </c:url>
                            <li class="category-items">
                                <a class="get-data-value" href="${cateAction}">${c.name}</a>
                            </li>
                        </c:forEach>

                    </ul>
                </nav>
            </div>

            <!-- product -->
            <div class="grid__column-10">
                <div class="products">
                    <div class="grid__row" id="product">
                        <c:forEach items="${products}" var = "p">
                            <div class="grid__column-2-4">
                                <div class="product-item">
                                    <div class="product-item-img" style="background-image:url('${p.image}');"></div>
                                    <h3 class="product-item-name">${p.name}</h3>
                                    <p class="product-item-price">${p.price}</p>
                                    <div class="product-flex">
                                        <c:url value="/api/products/${p.id}" var = "api" />
                                        <div class="product-flex-detail">
                                            <a href="<c:url value="/products/${p.id}"/>"/>Cập nhật</a>
                                        </div>
                                        <button class="btn btn-danger" onclick="deleteProduct('${api}')">Xóa</button>
                                    </div>
                                </div>
                            </div>
                        </c:forEach>
                    </div>
                </div>
                <ul class="btn-page ">
                    <c:forEach begin="1" end="${counter}" var = "i">   
                        <c:url value="/" var="pageAction">
                            <c:param name="page" value="${i}" />
                        </c:url>
                        <li class =""><a class="" href="${pageAction}">${i}</a></li>
                        </c:forEach>
                </ul>
            </div>
        </div>
    </div>
</div>
                            
<script src="<c:url value="/js/main.js"/>"></script>