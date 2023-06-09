import React from 'react';
import './Main.css'
import {Button, Dropdown, Menu} from "antd";
import {useNavigate} from "react-router-dom";
import {Link} from "react-router-dom";
import {DownOutlined} from "@ant-design/icons";

function Header() {
    // render() {
    //定义跳转函数
    const navigate = useNavigate();


    //购买详情页
    function handleBuyClick() {
        navigate("/paymentPage");
    }

    //使用教程
    function handleUseClick(e) {
        switch (e.key) {
            case 'pictureTeach':
                window.open("https://go.runba.cyou/doc/#/Windows/V2RayN", "_blank");
                break;
            case 'videoTeach':
                window.open("https://leanoss.fuwenhao.club/pskYHbVyLATuWyRzOHlmFWxJzuPjNQzR/Mac%E7%B3%BB%E7%BB%9F%E4%B8%8B%E5%A6%82%E4%BD%95%E4%BD%BF%E7%94%A8ClassX%E7%99%BB%E5%BD%95VPN%E8%B4%A6%E5%8F%B7%E4%BD%BF%E7%94%A8%E6%BC%94%E7%A4%BA.mp4", "_blank");
                break;
            default:
                break;
        }
    }

    const TeachMenu = (
        <Menu onClick={handleUseClick} mode={"horizontal"}>
            <Menu.Item key="pictureTeach">图文教程</Menu.Item>
            <Menu.Item key="videoTeach">视频教程</Menu.Item>
        </Menu>
    );


    return (
        <nav className="navbar navbar-expand-lg ">
            <div className="container-fluid ">
                {/*a标签替换成路由形式调用*/}
                <a href="index.html" className="d-flex align-items-center text-dark text-decoration-none">
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="32" className="me-2"
                         viewBox="0 0 118 94"
                         role="img">
                        <title>Bootstrap</title>
                        <path fill-rule="evenodd" clip-rule="evenodd"
                              d="M24.509 0c-6.733 0-11.715 5.893-11.492 12.284.214 6.14-.064 14.092-2.066 20.577C8.943 39.365 5.547 43.485 0 44.014v5.972c5.547.529 8.943 4.649 10.951 11.153 2.002 6.485 2.28 14.437 2.066 20.577C12.794 88.106 17.776 94 24.51 94H93.5c6.733 0 11.714-5.893 11.491-12.284-.214-6.14.064-14.092 2.066-20.577 2.009-6.504 5.396-10.624 10.943-11.153v-5.972c-5.547-.529-8.934-4.649-10.943-11.153-2.002-6.484-2.28-14.437-2.066-20.577C105.214 5.894 100.233 0 93.5 0H24.508zM80 57.863C80 66.663 73.436 72 62.543 72H44a2 2 0 01-2-2V24a2 2 0 012-2h18.437c9.083 0 15.044 4.92 15.044 12.474 0 5.302-4.01 10.049-9.119 10.88v.277C75.317 46.394 80 51.21 80 57.863zM60.521 28.34H49.948v14.934h8.905c6.884 0 10.68-2.772 10.68-7.727 0-4.643-3.264-7.207-9.012-7.207zM49.948 49.2v16.458H60.91c7.167 0 10.964-2.876 10.964-8.281 0-5.406-3.903-8.178-11.425-8.178H49.948z"
                              fill="currentColor"></path>
                    </svg>
                    <span className="fs-4">VPN - 特惠版</span>
                </a>
                <button className="navbar-toggler" id="navbar-button" type="button" data-toggle="collapse"
                        data-target="#navbarNav">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end mt-1" id="navbarNav">
                    <div className="navbar-nav">
                        {/*<a className="me-3 py-2 text-dark text-decoration-none" href="accounts.html">账号购买</a>*/}
                        {/*<a className="me-3 py-2 text-dark text-decoration-none" href="gpt.html">套餐购买</a>*/}

                        <Dropdown overlay={TeachMenu}>
                            <a className="me-3 py-2 text-dark text-decoration-none buy_account_font"
                               onClick={e => e.preventDefault()}>
                                使用教程 <DownOutlined/>
                            </a>
                        </Dropdown>
                        {/*<Button type="text" className="me-3 py-2 text-dark text-decoration-none buy_account_font"*/}
                        {/*        onClick={handleUseClick}>使用教程</Button>*/}
                        <Button type="text"
                                className="me-3 py-2 text-dark text-decoration-none buy_account_font"
                                onClick={handleBuyClick}>账号购买</Button>
                    </div>
                </div>
            </div>
        </nav>
    )
    // }
}

export default Header;
