import React from "react";
import {BrowserRouter, Route, Link, Routes} from "react-router-dom";
import Home from "./Home";
import About from "../about/About";

// import Contact from "./Contact";

class AppTest extends React.Component {
    render() {
        return (
            <div>
                <nav>
                    {/* Link 组件用于实现导航 */}
                    <ul>
                        <li>
                            <Link to="/home">Home</Link>
                        </li>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                        {/*<li>*/}
                        {/*    <Link to="/contact">Contact Us</Link>*/}
                        {/*</li>*/}
                    </ul>
                </nav>

                <Routes>
                    {/* Route 组件用于渲染与给定路径匹配的组件 */}
                    <Route exact path="/home" component={Home}/>
                    <Route path="/about" component={About}/>
                    {/*<Route path="/contact" component={Contact} />*/}
                </Routes>
            </div>
        );
    }
}

export default AppTest;