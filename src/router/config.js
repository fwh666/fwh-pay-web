import App from '../pages/app/app.js';
import PaymentPage from "../pages/pay/PaymentPage";
import MyPage from "../pages/home/MyPage";
import Product from "../pages/product/Product";
import Buy from "../pages/pay/Buy";

export default [
    {
        path: '/App',
        element: <App/>,
    },
    {
        path: '/Payment',
        element: <PaymentPage/>,
    },
    {
        path: '/',
        element: <MyPage/>
        // element: <Product/>
        // element: <Buy/>
    }
]