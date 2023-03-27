import React from 'react';


class Footer extends React.Component {
    render() {
        return (
            <div className="row">
                <div className="col-12 col-md text-left">
                    <small className="d-block mb-3 text-muted">chatgpt 轻松版 &copy; 2023 版权所有</small>
                    <small className="d-block mb-3 text-muted">
                        <p><a href="https://beian.miit.gov.cn">蜀ICP备2021019761号-7</a> All Rights Reserved</p>
                    </small>
                    <small className="d-block mb-3 text-muted">
                        <p><a href="/sitemap.xml">站点地图</a></p>
                    </small>

                </div>
                <div className="col-12 col-md">
                    <p>
                        客服QQ: 2701018233
                    </p>
                    <p>
                        QQ交流群: <a target="_blank" href="https://jq.qq.com/?_wv=1027&k=EvmBYr0C"
                                     className="text-decoration-none">133346510</a>
                    </p>
                </div>
            </div>
        )
    }
}

export default Footer;
