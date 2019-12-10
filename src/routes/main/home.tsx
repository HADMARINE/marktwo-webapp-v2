import React, { Component, Fragment } from 'react';
import Bootstrap, { Button, Alert } from 'react-bootstrap';
import HorizonIndexCard from '../components/HorizonIndexCard';

import styled, { createGlobalStyle } from 'styled-components';
import '../../styles/index.scss';

const GlobalStyle = createGlobalStyle`
body {
  /* margin: 0;
  padding: 0; */
  background-color:rgb(24,24,24);
  color:white;
  justify-content:center;
 
}
.form-control{
  background-color: rgb(60,60,60) !important;
  color: white !important;
  border-color: black !important;
}`;

const Wrapper = styled.div`
  background-color: rgb(24, 24, 24);
  color: white;
`;

const Center = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  word-break: break-all;
`;

const CardWrapper = styled.span`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

export default class Home extends Component {
  state = {
    isLogin: false,
    isAlertVisible: true
  };

  componentWillMount() {
    if (sessionStorage.getItem('token')) {
      this.setState({ isLogin: true });
    }
  }

  render() {
    const MainAlert = (
      <Alert
        variant="dark"
        onClose={() => this.setState({ isAlertVisible: false })}
        dismissible
        style={{ margin: '1rem' }}
      >
        <Alert.Heading>중요 공지!</Alert.Heading>
        <p>
          짧은 시일 내로 회원가입 DB가 초기화될 예정입니다. 이후 회원가입 시에는{' '}
          <b>인증 코드</b>가 있어야 가입이 되며
        </p>
      </Alert>
    );

    const LoginAlert = (
      <Alert
        variant="dark"
        onClose={() => this.setState({ isAlertVisible: false })}
        style={{ margin: '1rem' }}
      >
        <Alert.Heading>중요 공지!</Alert.Heading>
        <p>
          로그인이 되지 않을 시 실명 입력을 하지 않아 계정이 삭제 된 것입니다.
          <br />
          실명으로 회원가입을 다시 해주십시오.
        </p>
      </Alert>
    );

    const unLoginHome = (
      <div className="Style-center">
        <GlobalStyle />
        {LoginAlert}
        <div>
          <p className="Blank-small" />
          <p className="Text-medium">쾌적한 컴퓨터실 생활의 중심</p>
          <p className="Text-xlarge Text-bold">MARKTWO</p>

          <div className="Blank-medium" />
          <p className="Text-small Text-xlight">
            서비스를 이용하기 위해서는 로그인이 필요합니다.
          </p>
          <div className="Blank-xxsmall" />
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
      <Wrapper>
        <GlobalStyle />
        <div className="Style-center">
          <span style={{ backgroundColor: 'white' }}>
            <p className="Blank-xsmall" />

            {this.state.isAlertVisible ? MainAlert : <></>}
            <CardWrapper>
              <HorizonIndexCard
                title="컴실유틸"
                content="여러분의 컴퓨터실 생활에 도움이 될 수 있는 유틸리티가 많이 있습니다."
                link="/service/comsil"
              />
              <HorizonIndexCard
                title="유틸리티"
                content="그래픽툴부터 게임, 오피스 등 우리에게 꼭 필요한 프로그램들이 준비되어 있습니다."
                link="/service/utility"
              />
              <HorizonIndexCard
                title="그래픽 툴"
                content="디자이너를 위한 그래픽 툴이 준비되어 있습니다. 맥과 윈도우 가리지 않고요."
                link="/service/graphics"
              />
              <HorizonIndexCard
                title="게임"
                content="재밌는 게임들이 준비되어 있습니다. 다운로드만 하세요."
                link="/service/game"
              />
            </CardWrapper>
          </span>
        </div>
      </Wrapper>
    );
    return <>{this.state.isLogin ? LoginHome : unLoginHome}</>;
  }
}
