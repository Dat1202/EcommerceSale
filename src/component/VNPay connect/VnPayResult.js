// import React, { useEffect } from 'react';

// const VnPayResult = () => {
//   useEffect(() => {
//     const handlePaymentResult = async () => {
//       // Lấy thông tin kết quả thanh toán từ URL
//       const urlParams = new URLSearchParams(window.location.search);
//       const vnpResponseCode = urlParams.get('vnp_ResponseCode');
//       const vnpTransactionCode = urlParams.get('vnp_TransactionCode');
//       const vnpAmount = urlParams.get('vnp_Amount');

//       // Gửi yêu cầu kiểm tra kết quả thanh toán đến server
//       const response = await fetch('YOUR_PAYMENT_RESULT_API_URL', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({});
