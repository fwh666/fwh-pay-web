import React from "react";

class Main extends React.Component {
    render() {
        return (
            <main>
                {/*todo-fwh-主页内容介绍-跳转到支付页面-支付成功页面发送邮件*/}

                <div className="row">
                    <div className="col">
                        <div className="pricing-header p-3 pb-md-4 mx-auto text-center">
                            <h3 className="display-4 fw-normal">
                                ChatGPT 轻松版 - 付费账号 - 在线聊天
                            </h3>
                        </div>
                    </div>
                </div>
                <div className="row row-cols-1 row-cols-md-2 mb-3 text-center">
                    <div className="col">
                        <div className="card mb-4 rounded-3 shadow-sm">
                            <div className="card-header py-3">
                                <h4 className="my-0 fw-normal">套餐购买</h4>
                            </div>
                            <div className="card-body">
                                <h1 className="card-title pricing-card-title">
                                    套餐购买
                                </h1>
                                <ul className="list-unstyled mt-3 mb-4">
                                    <li>无需访问外网</li>
                                    <li>客服支持</li>
                                    <li>用户体验非常好</li>
                                </ul>
                                <a href="gpt.html" className="w-100 btn btn-lg btn-primary" target="_blank">立即购买</a>
                            </div>
                        </div>
                    </div>
                    <div className="col text-center">
                        <div className="card mb-4 rounded-3 shadow-sm">
                            <div className="card-header py-3 text-bg-primary border-primary">
                                <h4 className="my-0 fw-normal">账号购买</h4>
                            </div>
                            <div className="card-body">
                                <h1 className="card-title pricing-card-title">
                                    账号购买
                                </h1>
                                <ul className="list-unstyled mt-3 mb-4">
                                    <li>一手ChatGPT账号</li>
                                    <li>支持改密码</li>
                                    <li>支持邮箱密码修改</li>
                                </ul>
                                <a type="button" href="accounts.html" className="w-100 btn btn-lg btn-primary"
                                   target="_blank">立即购买</a>
                            </div>
                        </div>
                    </div>


                </div>
                <div className="alert alert-warning" role="alert">
                    <p>
                        套餐是按照包天方式，无需访问chatgpt官网就能在线体验chatgpt的对话功能
                    </p>
                    <p>
                        账号购买是购买一手chatgpt成品账号，永久有效！
                    </p>
                </div>
                <div className="row">
                    <div className="col">
                        <div className="pricing-header p-3 pb-md-4 mx-auto text-center">
                            <h6 className="display-4 fw-normal">在线UI界面, 给你极致的体验</h6>
                            <p className="fs-5 text-muted">
                                <img src="static/1.png" alt=""/>
                            </p>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="pricing-header p-3 pb-md-4 mx-auto text-center">
                        <h3 className="display-4 fw-normal">更多支持</h3>
                        <p className="fs-5 text-muted">
                            系统集成，使用chatgpt集成到其他系统，例如个人微信、企业微信、钉钉、飞书等。
                        </p>
                    </div>
                </div>
                <div className="row text-center">
                    <div className="col-lg-4">
                        <h2 className="fw-normal">微信集成</h2>
                        <p>集成到个人微信、关键词过滤、特定动作使用chatgpt回答(例如被@) </p>
                        <p>
                            QQ: 2701018233 备注个人微信集成
                        </p>
                    </div>
                    <div className="col-lg-4">
                        <h2 className="fw-normal">机器人集成</h2>
                        <p>
                            企业微信、飞书、钉钉等机器人集成，可以在特定群聊中回答问题非常方便。
                        </p>
                        <p>QQ: 2701018233 机器人集成</p>
                    </div>
                    <div className="col-lg-4">
                        <h2 className="fw-normal">商务咨询</h2>
                        <p>
                            商务合作请联系, 源码安装、部署等
                        </p>
                        <p>QQ: 2701018233 备注商务咨询</p>
                    </div>
                </div>

            </main>
        );
    }
}

export default Main;