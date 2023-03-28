import React, {useState} from 'react';
import './PaymentPage.css';
import {Button} from 'antd'
import Header from "../home/header";
import Footer from "../home/footer";
import instance from '../../utils/network';

function PaymentPage() {
    const [amount, setAmount] = useState(19.9); // 订单金额
    let qr_code = ''
    const pay = () => {
        // 调用支付接口
        instance.get('/api/pay/getPayQrCode').then((response) => {
            console.log('响应：', response);
            qr_code = response
        })
    }
    const payment = () => {
        instance.get('/api/pay/getWebPay');
    }

    return (
        <main>
            <header>
                <Header/>
            </header>
            <div className="Payment">
                {/*<div className="QR_code">*/}
                {/*    <QRCode value={qr_code}/>*/}
                {/*</div>*/}
                <div className="PayTip">
                    <p>请使用支付宝扫码支付：¥{amount}</p>
                </div>
                <div className="PayTip">
                    <p>支付方式：支付宝扫码</p>
                </div>
                <div className="PayTip">
                    <p>订单编号： Z23032815809JKLA</p>
                    <p>商品名称： ChatGPT独享号</p>
                    <p>购买数量： 1</p>
                </div>
                {/*如何调用接口回显重定向页面？*/}
                <Button onClick={payment} type="primary" size="large">
                    确认付款
                </Button>
                <Button onClick={pay} type="primary" size="large">
                    重新选择
                </Button>
                {/*    todo-fwh-点击完成后-  返回商品  等待付款中(持续调用查询状态 -参考https://www.zuuu.net/links/F95AF00A)*/}
            </div>
            <footer>
                <Footer/>
            </footer>
        </main>
    )
        ;
}

export default PaymentPage;