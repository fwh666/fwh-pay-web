import React, {useState, useEffect} from 'react';
import header from "../home/header";

function Alipay() {


    // const orderNumber = "1680076007949"; // 订单号
    // const totalPrice = 100; // 总价
    // const returnUrl = "https://www.example.com/pay-result"; // 支付完成后跳转的页面
    //
    // const requestUrl = `https://openapi.alipaydev.com/gateway.do?` +
    //     `app_id=2021000122669250` +
    //     `&method=alipay.trade.page.pay` +
    //     `&charset=utf-8` +
    //     `&sign_type=RSA2` +
    //     `&timestamp=${new Date().toISOString()}` +
    //     `&version=1.0` +
    //     `&notify_url=https://www.example.com/notify` + // 支付宝服务器异步通知页面
    //     `&biz_content=` +
    //     `{` +
    //     `"out_trade_no":"${orderNumber}",` +
    //     `"product_code":"FAST_INSTANT_TRADE_PAY",` +
    //     `"total_amount":"${totalPrice.toFixed(2)}",` +
    //     `"subject":"Example product name",` +
    //     `"body":"Example product description"` +
    //     `}` +
    //     `&return_url=${encodeURIComponent(returnUrl)}`; // 转义URL，防止其中包含特殊字符
    //
    // window.location.href = requestUrl; // 使用window.location.href来进行跳转


    const [htmlContent, setHtmlContent] = useState("tt");
    /*如何填充返回的支付页面?*/
    useEffect(() => {
        console.log('组件已经挂载');
        fetch('/api/pay/getWebPay')
            .then((response) => {
                console.log('response', response);
                // window.location.href = response.text();
            })
            .then(response => response.text())
            .then((data) => {
                console.log('data:', data);
                setHtmlContent(data);
            });
    }, []);

    if (htmlContent.includes('form')) {
        window.location.href = htmlContent;
    }

    // console.log('neirong:', htmlContent)
    // if (htmlContent.includes('form')) {
    //     // window.location.href = htmlContent;
    //
    //
    //     // 创建一个隐藏的容器元素
    //     const div = document.createElement('div');
    //     div.style.display = 'none';
    //
    //     // 将HTML字符串设置为容器元素的innerHTML
    //     div.innerHTML = htmlContent;
    //
    //     // 获取容器元素中的form元素和所有input元素
    //     const form = div.querySelector('form');
    //     const inputs = form.querySelectorAll('input');
    //
    //     // 将input元素的name和value设置为URL参数的形式
    //     const params = [];
    //     inputs.forEach((input) => {
    //         params.push(`${input.name}=${input.value}`);
    //     });
    //
    //     // 获取后台页面的URL并添加URL参数
    //     const url = form.action + '?' + params.join('&');
    //
    //     // 实现前端页面的跳转
    //     window.location.href = url;
    // }


    return (
        <div dangerouslySetInnerHTML={{__html: htmlContent}}/>
    );


//
//
// const [payUrl, setPayUrl] = useState('');
//
// useEffect(() => {
//     // 调用接口获取支付信息
//     fetch('/api/pay/getWebPay')
//         .then((response) => {
//             console.log('响应',response)
//             console.log('响应2',response.text())
//         })
//         .then(data => {
//             // 使用获取的支付信息生成支付链接
//             setPayUrl(data.payUrl);
//             // 打开支付宝支付页面
//             window.location.href = data.payUrl;
//         });
//
//     // 监听支付回调页面的 URL，获取支付结果
//     const intervalId = setInterval(() => {
//         if (window.location.href.indexOf('/pay-callback') !== -1) {
//             clearInterval(intervalId);
//             const searchParams = new URLSearchParams(window.location.search);
//             const result = searchParams.get('result');
//             if (result === 'success') {
//                 // 处理支付成功的情况
//                 console.log('支付成功');
//             } else {
//                 // 处理支付失败的情况
//                 console.log('支付失败');
//             }
//         }
//     }, 500);
// }, []);
//
// return <div>正在跳转支付宝支付...</div>;
}

export default Alipay;


