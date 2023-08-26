<%-- 
    Document   : admin
    Created on : 26 Aug 2023, 4:13:16 pm
    Author     : dat98
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>

<c:forEach items="${categories}" var = "c">
    <div>${c.name}</div>
</c:forEach>