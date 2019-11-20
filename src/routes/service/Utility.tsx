import React, { Component } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import ProductInfoList from './components/ProductInfoList';
import apiUri from '../api/getApiUri';

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
  :focus{
    /* background-color:black; */
  }

}`;
const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;
export default class Utilty extends Component {
  render() {
    return (
      <>
        <GlobalStyle />
        <div className="Blank-small" />
        <Wrapper>
          <div className="Blank-small" />
          <p className="Text-medium Text-bold">유틸리티</p>
        </Wrapper>
        <Wrapper>
          <ProductInfoList data="여기에 데이터 삽입" />
        </Wrapper>
      </>
    );
  }
}
