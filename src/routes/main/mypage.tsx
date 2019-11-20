import React, { Component } from 'react';
import '../../styles/index.scss';
import apiUri from '../api/getApiUri';
import styled, { createGlobalStyle } from 'styled-components';

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
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  word-break: break-all;
`;

export default class Mypage extends Component {
  render() {
    return (
      <>
        <GlobalStyle />
        <Wrapper></Wrapper>
      </>
    );
  }
}
