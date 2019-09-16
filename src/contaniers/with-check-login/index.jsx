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
      const { token, location, history, match } = this.props;
      const { pathname } = location;

      if (pathname === '/login' && token) return <Redirect to="/"/>;
      if (pathname !== '/login' && !token) return <Redirect to="/login"/>;
      return <WrappedComponent location={location} history={history} match={match}/>;
    }
  })
}

export default withCheckLogin;
