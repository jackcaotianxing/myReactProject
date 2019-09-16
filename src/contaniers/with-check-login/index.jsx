import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
// 检查是否登录的方法
function withCheckLogin(WrappedComponent) {

  return connect(
    (state) => ({token: state.user.token}),
    null
  )(class extends Component {
    static displayName = `CheckLogin(${WrappedComponent.displayName || WrappedComponent.name || 'Component'})`;

    render() {
      // 当前路径
      const { token, ...rest} = this.props;//主要是传children属性
      const { location:{pathname} } = rest;

      if (pathname === '/login' && token) return <Redirect to="/"/>;
      if (pathname !== '/login' && !token) return <Redirect to="/login"/>;
      return <WrappedComponent {...rest}/>;
    }
  })
}

export default withCheckLogin;
