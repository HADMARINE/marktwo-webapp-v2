import React, { Component, Fragment } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
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
class Notfound extends Component {
  render() {
    return (
      <>
        <GlobalStyle />
        <div className="Style-center Style-overflow-hidden">
          <div>
            <p className="Module-notfoundmove" />
            <p className="Module-notfound">&nbsp;404&nbsp;</p>
          </div>
          <p className="Module-notfoundmove" />
          <p className="Text-medium"> Not found</p>
          <div className="Module-not" />
          <p className="Text-xsmall">
            <code>무엇을 찾아 헤메던 것일까</code>
          </p>
        </div>
      </>
    );
  }
}

export default Notfound;
