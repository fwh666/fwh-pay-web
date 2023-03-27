
import React, { useState } from 'react';

function PaymentPage() {
    const [amount, setAmount] = useState(100); // 订单金额

    const pay = () => {
        // 调用支付接口
        // ...
    }

    return (
        <div>
            <h1>支付页面</h1>
            <p>订单金额：{amount}</p>
            <button onClick={pay}>支付</button>
        </div>
    );
}

export default PaymentPage;