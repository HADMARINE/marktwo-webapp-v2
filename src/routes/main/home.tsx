import React, { Component, Fragment } from 'react';
import Bootstrap, { Button } from 'react-bootstrap';

import styles, { createGlobalStyle } from 'styled-components';
import '../../styles/index.scss';

const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  background-color:rgb(24,24,24);
  color:white;
}
.form-control{
  background-color: rgb(60,60,60) !important;
  color: white !important;
  border-color: black !important;
}`;

export default class Home extends Component {
  state = {
    isLogin: false
  };
  componentDidMount() {
    if (sessionStorage.getItem('token')) {
      this.setState({ isLogin: true });
    }
  }
  render() {
    const unLoginHome = (
      <div className="Style-center">
        <GlobalStyle />
        <div>
          <p className="Blank-small" />
          <p className="Text-medium">쾌적한 컴퓨터실 생활의 중심</p>
          <p className="Text-xlarge Text-bold">MARKTWO</p>
          <img
            src="https://occ-0-988-993.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABSpHMNyvIRy6PolVWkmMg80JA0Kdcldq3vIxohYsRrtBKVZEyJAW6ls4b6EoKP7DzCQ6Fvnq5C694tN5eN06_Hb5gHp2.webp?r=105"
            height="400px"
            alt="예시 사진"
          />
          <div className="Blank-xxsmall" />
          <p className="Text-small Text-xlight">
            서비스를 이용하기 위해서는 로그인이 필요합니다.
          </p>
          <Button
            variant="dark"
            href="/login"
            size="lg"
            style={{ width: '15rem' }}
          >
            로그인
          </Button>
        </div>
        <div></div>
      </div>
    );

    const LoginHome = (
      <div className="Style-center">
        <div>
          <p className="Blank-small" />
          <p className="Text-medium">하루를 되돌아봐요</p>
          <p className="Text-xlarge Text-bold">dodol:i</p>
          <p className="Text-small Text-light">
            여기에는 아마 사진이 들어갈 것입니다
          </p>
        </div>
        <div></div>
      </div>
    );
    return <>{this.state.isLogin ? LoginHome : unLoginHome}</>;
  }
}
