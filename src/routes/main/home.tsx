import React, { Component, Fragment } from 'react';
import Bootstrap, { Button } from 'react-bootstrap';
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
            </CardWrapper>
          </span>
        </div>
      </Wrapper>
    );
    return <>{this.state.isLogin ? LoginHome : unLoginHome}</>;
  }
}
