import React from 'react'
import { Button, Icon ,Modal} from 'antd';
import screenfull from 'screenfull';
import {connect} from 'react-redux'
import './index.less'
import {removeUser} from "../../../redux/action-creators";
import {formatDate} from '../../../utils/tools'
@connect(
    (state)=>({
        username:state.user.user.username,
        title: state.title
    }),
    {removeUser}
)
class HeaderMain extends React.Component{
    state={
        isScreenFull: false,
        time:formatDate()
    }
    screenfull=()=>{
        if (screenfull.isEnabled) {
            screenfull.toggle();
        }
    }
    change = ()=>{
        this.setState({
            isScreenFull:!this.state. isScreenFull
        })
    }
    componentDidMount() {
        //绑定事件
        screenfull.on('change',this.change);
        //设置定时器
        setInterval(()=>{
            this.setState({
                time:formatDate()
            })
        },1000)
    }
    componentWillUnmount() {
        // 解绑事件
        screenfull.off('change', this.change);
    }
    logout=()=>{
        Modal.confirm({
            title: '你确定要退出登录吗',
            // 点击确认清除用户数据
            onOk:()=>{
                this.props.removeUser();
            },
            onCancel:()=>{},
            okText:'确认',
            cancelText:"取消"
        });
    }

    render(){
        const { isScreenFull,time} =this.state;
        const {username,title} = this.props
        return(
            <div className="header-main">
                <div className="header-main-top">
                    <Button size="small" onClick={this.screenfull}><Icon type={isScreenFull ? 'fullscreen-exit' : 'fullscreen'} /></Button>
                    <Button size="small" className="header-main-btn" >English</Button>
                    <span>欢迎, {username}</span>
                    <Button type="link" onClick={this.logout}>退出</Button>
                </div>
                <div className="header-main-bottom">
                    <h3>{title}</h3>
                    <span>{time}</span>
                </div>
            </div>
        )
    }
}
export default HeaderMain