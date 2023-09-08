import React from 'react';

const VnPayPayment = () => {
  const handlePayment = () => {
    const vnpay = window.vnpay;

    const paymentData = {
      // Thông tin thanh toán
      amount: 100000,
      orderInfo: 'Thanh toán đơn hàng',
    };

    vnpay.open({
      width: 768,
      height: 600,
      url: 'https://sandbox.vnpayment.vn/paymentv2/vpcpay.html',
      data: paymentData,
      callback: function(response) {
        // Xử lý kết quả thanh toán
        console.log(response);
      },
    });
  };

  return (
    <div>
      {/* Giao diện nút thanh toán */}
      <button onClick={handlePayment}>Thanh toán</button>
    </div>
  );
};

export default VnPayPayment;