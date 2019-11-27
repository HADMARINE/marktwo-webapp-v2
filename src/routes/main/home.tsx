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
      >
        <Alert.Heading>감사합니다!</Alert.Heading>
        <p>
          여러분의 성원에 힘입어 MARKTWO V2 를 발표하게 되었습니다.
          <br />
          모든 기능이 업데이트되어 돌아왔으며 지속적으로 업데이트 될 예정입니다.
          <br />
          모든 사람이 제한없는 컴퓨터 라이프를 누릴 수 있도록, MARKTWO는
          지속적으로 운영될 것입니다.
          <br />
          후원은 &nbsp;
          <a href="mailto:joonlee031@outlook.com" style={{ color: '#2c4ac4' }}>
            이메일
          </a>{' '}
          로 문의바랍니다. 감사합니다
        </p>
      </Alert>
    );
    const unLoginHome = (
      <div className="Style-center">
        <GlobalStyle />
        <div>
          <p className="Blank-small" />
          <p className="Text-medium">쾌적한 컴퓨터실 생활의 중심</p>
          <p className="Text-xlarge Text-bold">MARKTWO</p>
          {/* <Center>
            <img
              src="https://occ-0-988-993.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABSpHMNyvIRy6PolVWkmMg80JA0Kdcldq3vIxohYsRrtBKVZEyJAW6ls4b6EoKP7DzCQ6Fvnq5C694tN5eN06_Hb5gHp2.webp?r=105"
              height="200px"
              alt="예시 사진"
              className="Style-flex-center"
            />
          </Center> */}

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
