import React from "react";
import {Link} from "react-router-dom";

class Home extends React.Component {
    render() {
        return (
            <div>
                <h1>ddddWelcome to the Home Page</h1>
                {/* Link 组件用于实现导航 */}
                <Link to="/about">Go to About Page</Link>
            </div>
        );
    }
}

export default Home;