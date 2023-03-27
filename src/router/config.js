import View from '../pages/view/view';
import App from  '../pages/app/app.js';
import PaymentPage from "../pages/pay/PaymentPage";

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
        element: <App />,
    },
    {
        path: '/',
        element: <PaymentPage />,
    }
]