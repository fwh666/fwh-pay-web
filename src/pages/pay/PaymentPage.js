import React, {useState} from 'react';
import './PaymentPage.css';
import {Button, Form, Input, Space} from 'antd'
import Header from "../home/header";
import Footer from "../home/footer";


function PaymentPage() {
    //定义变量
    const [email, setEmail] = useState("");
    const [isValid, setIsValid] = useState(false);
    //邮箱校验
    const handleEmailChange = (e) => {
        setEmail(e.target.value);
        setIsValid(/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e.target.value));
    };

    //支付页面调用
    const handleSubmit = (event) => {
        event.preventDefault();
        //邮箱校验
        if (isValid) {
            // 在这里进行提交操作
            console.log("Email格式验证通过");
        } else {
            alert("请输入正确的邮箱地址"); // 若Email格式验证不通过，弹出提示框
        }
        const url = `/api/pay/getWebPay?email=${email}&orderNo=${orderNumber}`;
        fetch(url)
            .then(response => response.text())
            .then((data) => {
                console.log('data:', data);
                const formElement = document.createElement("div");
                formElement.style.display = "display:none;";
                formElement.innerHTML = data;//去到from
                if (formElement.firstChild) {
                    formElement.firstChild.target = "_self";
                    document.body.appendChild(formElement);
                    formElement.firstChild.submit();//进行跳转
                    document.body.removeChild(formElement);
                }
            })
            .catch(error => console.log(error));
    }


    let startTimestamp = Date.UTC(2021, 0, 1, 0, 0, 0, 0);

    let sequence = 0;
    let lastTimestamp = 0;

    function generateOrderNumber() {
        let now = new Date().getTime();
        let timestamp = Math.floor((now - startTimestamp) / 100);
        if (timestamp === lastTimestamp) {
            sequence = (sequence + 1) & 0xFFF;
            if (sequence === 0) {
                timestamp++;
            }
        } else {
            sequence = 0;
        }
        lastTimestamp = timestamp;
        let orderNumber = ((timestamp << 12) + sequence).toString().padStart(14, '0');
        orderNumber = orderNumber.substr(2);
        return orderNumber;
    }
    //订单金额
    const [amount, setAmount] = useState(19.9);
    const [orderNumber, setOrderNumber] = useState(generateOrderNumber);

    return (
        <main>
            <header>
                <Header/>
            </header>
            <div className="Payment">
                <div className="PayTip">
                    <p>支付宝扫码支付：¥{amount}</p>
                </div>
                <div className="PayTip">
                    <p>支付方式：支付宝扫码</p>
                </div>

                <Form onFinish={handleSubmit}>
                    <Form.Item>
                        <div className="PayTip">
                            <p>订单编号： {orderNumber}</p>
                            <p>商品名称： VPN特惠账号</p>
                            <p>购买数量： 1</p>
                            <p><span className="font_red">*</span>接收账号邮箱：
                                <Space direction={"vertical"} size={"middle"}>
                                    <Input placeholder="example@gmail.com"
                                        // value={formData.name}
                                        // onChange={(e) => setFormData({...formData, name: e.target.value})}
                                           value={email}
                                           onChange={handleEmailChange}
                                           type="email"
                                           required
                                           size={"large"}/>
                                </Space>
                            </p>
                        </div>
                        {/*<Button onClick={handleBuyClick} type="submit" size="large">*/}
                        <Button onClick={handleSubmit} disabled={!isValid} type="submit" size="large">
                            确认付款
                        </Button>
                    </Form.Item>
                </Form>
            </div>
            <footer>
                <Footer/>
            </footer>
        </main>
    );
}

export default PaymentPage;