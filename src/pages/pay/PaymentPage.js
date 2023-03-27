import React, {useState} from 'react';
import QRCode from 'qrcode.react';
import './PaymentPage.css';
import {Button} from 'antd'

function PaymentPage() {
    const [amount, setAmount] = useState(100); // 订单金额

    const pay = () => {
        // 调用支付接口
        // ...
    }

    return (
        <div className="Payment">
            <div className="QR_code">
                <QRCode value="二维码内容"/>
            </div>
            <div className="PayTip">
                <p>请使用支付宝扫码支付：¥{amount}</p>
            </div>
            <Button onClick={pay} type="primary" size="large">
                支付完成请点击
            </Button>
        </div>
    );
}

export default PaymentPage;