import React, {useState} from 'react';
import './PaymentPage.css';
import {Button} from 'antd'
import Header from "../home/header";
import Footer from "../home/footer";
import instance from '../../utils/network';
import Alipay from "./Alipay";
import {useNavigate} from 'react-router-dom';


function PaymentPage() {
    /*重定向变量*/
    // const [redirect, setRedirect] = useState(false);
    // const history = useHistory();

    //定义跳转函数
    const navigate = useNavigate();
    function handleBuyClick() {
        navigate("/alipay");
    }


    const [amount, setAmount] = useState(19.9); // 订单金额
    let qr_code = ''
    /*二维码链接*/
    const pay = () => {
        // 调用支付接口
        instance.get('/api/pay/getPayQrCode').then((response) => {
            console.log('响应：', response);
            qr_code = response
        })
    }

    /*支付页面*/
    const payment = () => {
        instance.get('/api/pay/getWebPay')

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
                    <p>支付宝扫码支付：¥{amount}</p>
                </div>
                <div className="PayTip">
                    <p>支付方式：支付宝扫码</p>
                </div>
                <div className="PayTip">
                    <p>订单编号： Z23032815809JKLA</p>
                    <p>商品名称： VPN特惠账号</p>
                    <p>购买数量： 1</p>
                </div>
                {/*如何调用接口回显重定向页面？TODO-fwh-填写邮箱入口发送账号信息*/}
                <Button onClick={handleBuyClick} type="primary" size="large">
                    确认付款
                </Button>
            </div>
            <footer>
                <Footer/>
            </footer>
        </main>
    )
        ;
}

export default PaymentPage;