import React, { Component } from 'react';
import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  background-color:rgb(24,24,24);
  color:white !important;
}
.form-control{
  
  background-color: rgb(60,60,60) !important;
  color: white !important;
  border-color: black !important;

}`;
export default class FindPassword extends Component {
  render() {
    return (
      <>
        <GlobalStyle />
      </>
    );
  }
}
