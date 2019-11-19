import React, { Component } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  color : rgb(24,24,24);
}`;
export default class Comsil extends Component {
  render() {
    return (
      <>
        <GlobalStyle />
        <div></div>
      </>
    );
  }
}
