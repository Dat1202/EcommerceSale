
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@page contentType="text/html" pageEncoding="UTF-8"%>


<c:url value="/store/" var="action">  
    <c:param name="page" value="1"/>  
</c:url>  

<div class="category__container">
    <div class="grid__auto">
        <div class="grid__row">
            <div class="grid__column-2">
                <nav class="category">
                    <h3 class="category_heading"><i class="fa-solid fa-list"></i>Danh mục</h3>
                    <ul class="category-list">
                        <li class ="category-items"><a class="get-data-value" href="${action}">Tất cả</a></li>
                            <c:forEach items="${categories}" var = "c">
                                <c:url value="/store/" var="cateAction">
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
                        <c:forEach items="${store}" var = "p">
                            <div class="grid__column-2-4">
                                <div class="product-item">
                                    <div class="product-item-img" style="background-image:url('${p[1]}');"></div>
                                    <h3 class="product-item-name">${p[2]}</h3>
                                    <p class="product-item-price">${p[3]}</p>
                                    <div class="product-flex">
                                        <div class="product-flex-detail"><a href="detail.html"><i class="fa-solid fa-circle-info"></i>Xem chi tiết</a></div>
                                        <div class="product-flex-add-cart">
                                            <button class="add-Cart" onclick="addProduct()">
                                                <i class="fa-solid fa-cart-arrow-down"></i>Thêm giỏ hàng
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </c:forEach>
                    </div>
                </div>
                <c:if test="${counter > 1}">
                    <ul class="btn-page ">
                        <c:forEach begin="1" end="${counter}" var = "i" >   
                            <c:url value="/store/" var="baseUrl">  
                                <c:param name="page" value="${i}"/>  
                            </c:url>  
                            <li class =""><a class="" href="${baseUrl}">${i}</a></li>
                            </c:forEach>
                    </ul>
                </c:if>

            </div>
        </div>
    </div>
</div>
