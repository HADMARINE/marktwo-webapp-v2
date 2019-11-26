import React, { Component } from 'react';
import apiUri from '../api/getApiUri';

import publicIp from 'public-ip';
import Alert from './Alert';

import '../../styles/index.scss';

class Header extends Component {
  constructor(props: any) {
    super(props);
    document.title = 'MARKTWO';
  }

  state = {
    isLogin: false
  };

  checkIsLogin = async () => {
    await this.checkLocalToken();
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
        if (data.status === 403) {
          sessionStorage.removeItem('token');
          sessionStorage.removeItem('userid');
          localStorage.removeItem('token');
          alert('Error ' + data.status + ' : ' + data.message);
          window.location.replace('/');
        }
        if (!data.userid) {
          localStorage.removeItem('token');
          sessionStorage.removeItem('userid');
          this.setState({ isLogin: false });
          return;
        }
        this.setState({ isLogin: true });
        sessionStorage.setItem('userid', data.userid);
      })
      .catch();
  };

  checkLocalToken = async () => {
    const token = localStorage.getItem('token');
    if (token) {
      sessionStorage.setItem('token', token);
    }
  };

  async componentWillMount() {
    await this.checkIsLogin();
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
              style={{ fontSize: '2rem', marginTop: '0.8rem' }}
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
