
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@page contentType="text/html" pageEncoding="UTF-8"%>


<c:choose>
    <c:when test="${user.userRole == 'ROLE_STORE'}">
        <h1 class="text-center">Quản lí cửa hàng</h1>
        <div class="">
            <!--            <div 
                            class="m-5 dashboard">Số lượng sản phẩm của cửa hàng: ${countProduct}  
                            <a style = "font-size:12px;" href="<c:url value="/store/products?page=1"/>"><i class="fa-solid fa-chevron-right"></i></a>
                        </div>-->
            <div>
                <table class="table table-hover">
                    <tr class="table-info ">
                        <th>Id</th>
                        <th>Tên sản phẩm</th>
                        <th>Doanh thu</th>
                    </tr>

                    <c:forEach items="${countProductByCate}" var="c">
                        <tr>
                            <td>${c[0]}</td>
                            <td>${c[1]}</td>
                            <td>${c[2]}</td>
                        </tr>
                    </c:forEach>
                        
                </table>
                <div>
                    <h2>Số lượng sản phẩm theo thể loại</h2>
                    <form style="width: 500px">
                        <canvas id="chartProduct"></canvas>
                    </form>
                </div>
            </div>
        </div>



    </c:when>
    <c:when test="${user.userRole == 'ROLE_STAFF'}">
        <div class="text-center mt-2 text">Quản lí nhân viên</div>
    </c:when>

    <c:when test="${user.userRole == 'ROLE_ADMIN'}">
        
        <div 
            class="m-5 dashboard">Tổng số sản phẩm của sàn: ${count}
        </div>    
        
        <div 
            class="m-5 dashboard" style="border-left: 5px solid red;">Tổng số thể loại của sàn: ${countCategory}
        </div>  
        
            
        <div style="width: 500px; background-color: white; margin: 0 auto;">
            <canvas id="lineChart"></canvas>
        </div>
    </c:when> 
</c:choose>


<script src="https://cdn.jsdelivr.net/npm/chart.js"></script>

<script>
    let labels = [];
    let data = [];
    let colors = [];
    let borderColors = [];
    let r, g, b;
    let labels1 = [];
    let data1 = [];
    let colors1 = [];
    let borderColors1 = [];
    
    <c:forEach items="${countProductByCate}" var="c">
    labels.push('${c[1]}');
    data.push(${c[2]});
    r = Math.floor(Math.random() * 256);
    g = Math.floor(Math.random() * 256);
    b = Math.floor(Math.random() * 256);
    colors.push('rgba(' + r + ',' + g + ',' + b + ',0.5)');
    borderColors.push('rgba(' + r + ',' + g + ',' + b + ',1)');
    </c:forEach>

    <c:forEach items="${statsRevenueInEachStore}" var="c">
    labels1.push('${c[0]}');
    data1.push(${c[1]});
    r = Math.floor(Math.random() * 256);
    g = Math.floor(Math.random() * 256);
    b = Math.floor(Math.random() * 256);
    colors1.push('rgba(' + r + ',' + g + ',' + b + ',0.5)');
    borderColors1.push('rgba(' + r + ',' + g + ',' + b + ',1)');
    </c:forEach>
        
    window.onload = function () {
        const ctx = document.getElementById('chartProduct');
        const ctx1 = document.getElementById('lineChart');
        loadChart(ctx, labels, data, 'doughnut', colors, borderColors);
        loadChartStore(ctx1, labels1, data1, 'line', colors1, borderColors1);
    };
    
    function loadChart(ctx, labels, data, type, colors, borderColors) {
        const chartProduct = new Chart(ctx, {
            type: type,
            data: {
                labels: labels,
                datasets: [{
                        label: 'Số lượng sản phẩm theo thể loại',
                        data: data,
                        backgroundColor: colors,
                        borderColor: borderColors,
                        borderWidth: 1
                    }]
            }

        });
    }

    function loadChartStore(ctx1, labels1, data1, type, colors1, borderColors1) {
        const chartProduct = new Chart(ctx1, {
            type: type,
            data: {
                labels: labels1,
                datasets: [{
                        label: 'Thống kê doanh thu từng cửa hàng',
                        data: data1,
                        backgroundColor: colors1,
                        borderColor: borderColors1,
                        borderWidth: 1,
                        fill: false,
                        tension: 0.5
                    }]
            },
            options: {
                scales: {
                    y: {
                        stacked: true
                    }
                }
            }
        });
    }
</script>