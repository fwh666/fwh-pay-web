import React, {useState} from 'react';
import './PaymentPage.css';
import {Button, Form, Input, Space} from 'antd'
import Header from "../home/header";
import Footer from "../home/footer";


function PaymentPage() {
    //定义变量
    const [formData, setFormData] = useState({name: ''});
    //支付页面调用
    const handleSubmit = (event) => {
        event.preventDefault();
        const url = `/api/pay/getWebPay?email=${formData.name}`;
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


    const [amount, setAmount] = useState(19.9); // 订单金额

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
                            <p>订单编号： Z23032815809JKLA</p>
                            <p>商品名称： VPN特惠账号</p>
                            <p>购买数量： 1</p>
                            <p><span className="font_red">*</span>接收账号邮箱：
                                <Space direction={"vertical"} size={"middle"}>
                                    <Input placeholder="example@gmail.com"
                                           defaultValue={"zhangsan@163.com"}
                                           value={formData.name}
                                           onChange={(e) => setFormData({...formData, name: e.target.value})}
                                           type={"email"}
                                           required
                                           size={"large"}/>
                                </Space>
                            </p>
                        </div>
                        {/*<Button onClick={handleBuyClick} type="submit" size="large">*/}
                        <Button onClick={handleSubmit} type="submit" size="large">
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