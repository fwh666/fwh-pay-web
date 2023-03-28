import App from '../pages/app/app.js';
import PaymentPage from "../pages/pay/PaymentPage";
import MyPage from "../pages/home/MyPage";
import Product from "../pages/product/Product";
import Buy from "../pages/pay/Buy";
import HomeTest from "../pages/test/HomeTest";
import {Route} from "react-router-dom";
import About from "../pages/about/About";

// 所有页面路由的映射路径
export default [
    {
        path: '/app',
        element: <App/>,
    },
    {
        path: '/about',
        element: <About/>
    },
    {
        path: '/paymentPage',
        element: <PaymentPage/>,
    },
    {
        path: '/',
        // element: <App/>
        // element: <HomeTest/>
        element: <MyPage/>
        // element: <Product/>
        // element: <Buy/>
    }
]