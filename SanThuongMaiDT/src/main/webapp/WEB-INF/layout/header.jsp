<%-- 
    Document   : header
    Created on : 25 Jul 2023, 9:14:25 pm
    Author     : dat98
--%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@page contentType="text/html" pageEncoding="UTF-8"%>

<c:url value = "/" var="action" />
<header>
    <div class="header grid__auto">
        <div class="header__navbar-flex-user grid__auto ">
            <ul class="header__navbar-items ">
                <li class="header__navbar-item">
                    <a href="login.html">Đăng nhập</a>
                </li>
                <li class="header__navbar-item">
                    <a href="register.html">Đăng ký</a>
                </li>
            </ul>
        </div>

        <div class="header-flex-with-search">
            <div class="header__logo">
                <a href="${action}">
                    <img src="assets/img/logo.png" alt="logo">
                </a>
            </div>

            <form class="header__search" action="${action}">
                <input class="header__search-input" type="text" name ="kw" placeholder="Tìm kiếm..." />
                <button class="header__search-btn" type="submit">
                    <i class="fa fa-search" aria-hidden="true"></i>
                </button>
            </form>

            <div class="header__cart">
                <a href="cart.html">
                    <div class="header__cart-hover">
                        <i class="header__cart-icon fa fa-shopping-cart" aria-hidden="true"></i>
                        <div class="header__cart-list header__cart-list-no-cart">
                            <div class="header__cart-text-center">
                                <span>Chưa có sản phẩm</span>
                            </div>
                        </div>
                        <span class="header__cart-Number">0</span>
                    </div>
                </a>
            </div>
        </div>
    </div>
</header>