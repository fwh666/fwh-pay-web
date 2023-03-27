import App from '../pages/app/app.js';
import PaymentPage from "../pages/pay/PaymentPage";
import MyPage from "../pages/home/MyPage";
import Home from "../pages/home/Home";

export default [
    // {
    //     path: '/',
    //     element: <App />,
    // },
    // {
    //     path: '/view',
    //     element: <View />,
    // }
    //
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
    }
]