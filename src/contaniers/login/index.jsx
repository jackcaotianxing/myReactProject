import React from 'react'
import { Form, Icon, Input, Button, Checkbox,message } from 'antd';
import {connect} from 'react-redux'
import {saveUser} from '../../redux/action-creators'
import './login.less'
import {reqLogin} from "../../api";
import withCheckLogin from '../with-check-login/'
import logo from './logo.png';
import './bg.jpg'
@withCheckLogin
@connect(
    null,
    {saveUser}
)
@Form.create()
 class Login extends React.Component {
    validator = (rule, value, callback) => {
        const name = rule.field === 'username' ? '用户名' : '密码';
        if (!value) {
            return callback(`请输入${name}`)
        }
        if (value.length < 3) {
            return callback(`${name}长度必须大于3位`)
        }
        if (value.length > 13) {
            return callback(`${name}长度必须小于13位`)
        }
        const reg = /^[a-zA-Z0-9_]{3,13}$/;
        if (!reg.test(value)) {
            return callback(`${name}只能包含英文、数字和下划线`);
        }
        callback();
    };
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
                // console.log(err,values)
                // err为null表示检验成功
                if (!err) {
                    const {username, password} = values;
                    // 检验成功，发送请求
      /*              axios.post('http://localhost:3000/api/login', {username, password})
                        .then((res) => {
                            console.log(res)
                            if(res.data.status === 0){
                               message.success('登录成功')
                                // 保存数据 为了都能用  用redux管理多个组件共享的状态数据

                                this.props.saveUser(res.data.data)
                                //跳转页面
                                this.props.history.replace('/')
                            }else {
                                message.error(res.data.msg)
                            }
                        })
                        .catch((err) => {
                            message.error('未知错误，请联系管理员')
                        })
                        //ES9出的
                        .finally(()=>{
                            this.props.form.resetFields(['password'])
                        })*/
                    reqLogin(username,password)
                        .then((res)=>{
                            // 登录成功
                            message.success('登录成功~');
                            // 保存用户数据
                            this.props.saveUser(res);
                            // 跳转到 / 路由
                            this.props.history.replace('/');
                        })
                        .catch(()=>{
                            // 清空密码
                            this.props.form.resetFields(['password']);
                        })
                }
            }
        );

    }

    render() {
        const {getFieldDecorator} = this.props.form;
        return (
            <div className="login">
                <header className="login-header">
                    <img src={logo} alt="logo"/>
                    <h1>React项目: 后台管理系统</h1>
                </header>
                <section className="login-section">
                    <h3>用户登录</h3>
                    <Form onSubmit={this.handleSubmit} className="login-form">
                        <Form.Item>
                            {
                                getFieldDecorator(
                                    'username',
                                    {
                                        rules: [
                                            {
                                                validator: this.validator
                                            }
                                        ]
                                    }
                                )(<Input prefix={<Icon type="user"/>} placeholder="Username"/>,
                                )
                            }

                        </Form.Item>
                        <Form.Item>
                            {
                                getFieldDecorator(
                                    'password',
                                    {
                                        rules: [
                                            {validator: this.validator}
                                        ]
                                    }
                                )(
                                    <Input prefix={<Icon type="lock"/>} type="password" placeholder="Password"/>,
                                )
                            }
                        </Form.Item>
                        <Form.Item>
                            <Button type="primary" htmlType="submit" className="login-form-button">
                                登录
                            </Button>
                        </Form.Item>
                    </Form>
                </section>
            </div>
        )
    }
}
export default Login;