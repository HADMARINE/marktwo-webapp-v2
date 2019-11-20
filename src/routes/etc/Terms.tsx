import React, { Component } from 'react';
import styled, { createGlobalStyle } from 'styled-components';

import '../../styles/index.scss';
const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  background-color:rgb(24,24,24);
  color:white;
}
body{
  background-color:rgb(24,24,24);
}
.form-control{
  
  background-color: rgb(60,60,60) !important;
  color: white !important;
  border-color: black !important;


}`;

const Wrapper = styled.div`
  text-align: center;
`;

export default class Terms extends Component {
  render() {
    return (
      <>
        <GlobalStyle />
        <Wrapper>
          <div className="Blank-small" />
          <p className="Text-large Text-bold">이용 약관</p>
        </Wrapper>
      </>
    );
  }
}
