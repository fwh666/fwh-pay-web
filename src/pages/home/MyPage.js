import React from 'react';
import {Helmet} from 'react-helmet';

import Header from "./header";
import Footer from "./footer";
import AppTest from "./AppTest";

class MyPage extends React.Component {
    render() {
        return (
            <div>
                <Helmet>
                    <meta charset="UTF-8"/>
                    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                    <meta http-equiv="X-UA-Compatible" content="ie=edge"/>
                    <title>My Page Title</title>
                    <meta name="description" content="This is a description of my page."/>
                    <link rel="stylesheet" href="path/to/normalize.css"/>
                    <link rel="stylesheet" href="path/to/my-style.css"/>
                </Helmet>
                <header>
                    <Header/>
                </header>
                <main>
                    <AppTest/>
                </main>
                <footer>
                    <Footer/>
                </footer>
            </div>
        );
    }
}

export default MyPage;