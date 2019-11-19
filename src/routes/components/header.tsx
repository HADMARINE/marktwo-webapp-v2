import React, { Component } from 'react';
import apiUri from '../api/getApiUri';

import publicIp from 'public-ip';

import '../../styles/index.scss';

class Header extends Component {
  state = {
    isLogin: false
  };

  checkIsLogin = async () => {
    if (!sessionStorage.getItem('token')) {
      this.setState({ isLogin: false });
      return;
    }

    const queryHeader: any = {
      'Content-Type': 'application/json',
      'x-access-token': sessionStorage.getItem('token') || 'null'
    };

    const queryBody: any = {
      publicip: await publicIp.v4()
    };

    await fetch(apiUri + '/auth/verify', {
      method: 'POST',
      body: JSON.stringify(queryBody),
      headers: queryHeader
    })
      .then(res => res.json())
      .then(data => {
        if (!data.userid) {
          localStorage.setItem('token', '');
          sessionStorage.setItem('userid', '');
          return;
        }
        this.setState({ isLogin: true });
        sessionStorage.setItem('userid', data.userid);
      });
  };

  checkLocalToken = () => {
    const token = localStorage.getItem('token');
    if (token) {
      sessionStorage.setItem('token', token);
    }
  };

  componentDidMount() {
    this.checkLocalToken();
    this.checkIsLogin();
  }

  render() {
    const loginLoginBar = (
      <span>
        <a className="Module-loginbutton" href="/register">
          REGISTER
        </a>
        <a className="Module-loginbutton" href="/login">
          LOGIN
        </a>
      </span>
    );
    const unloginLoginBar = (
      <span>
        <a className="Module-loginbutton" href="/logout">
          LOGOUT
        </a>
        <a className="Module-loginbutton" href="/mypage">
          MYPAGE
        </a>
      </span>
    );
    return (
      <>
        <div className="Background-header">
          <div>
            <a
              className="Module-mainlogo"
              style={
                window.innerWidth > 500
                  ? { fontSize: '3rem' }
                  : { fontSize: '2rem', marginTop: '0.5rem' }
              }
              href="/"
            >
              MARKTWO
            </a>

            {!this.state.isLogin ? loginLoginBar : unloginLoginBar}
          </div>
          <br />
        </div>
      </>
    );
  }
}

export default Header;
