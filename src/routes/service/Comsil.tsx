import React, { Component } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import Product from './components/Product';
import apiUri from '../api/getApiUri';
const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  color : rgb(24,24,24);
}`;
const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;
export default class Comsil extends Component {
  render() {
    return (
      <>
        <GlobalStyle />
        <div className="Blank-small" />
        <Wrapper>
        </Wrapper>
      </>
    );
  }
}
