import React, { Component } from 'react';
import { Spinner } from 'react-bootstrap';
import { createGlobalStyle } from 'styled-components';
import '../../styles/index.scss';
const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  background-color:rgb(24,24,24);
  color:white !important;
}
body{
  background-color:rgb(24,24,24);
}
.form-control{
  
  background-color: rgb(60,60,60) !important;
  color: white !important;
  border-color: black !important;

}`;
class Logout extends Component {
  componentDidMount() {
    localStorage.removeItem('token');
    sessionStorage.removeItem('token');
    sessionStorage.removeItem('userid');
    window.location.replace('/');
  }
  render() {
    return (
      <>
        <GlobalStyle />
        <div className="Style-center">
          <Spinner
            style={{ marginTop: '10rem', marginBottom: '3rem' }}
            animation="border"
          />
          <h3>Logging out..</h3>
        </div>
      </>
    );
  }
}

export default Logout;
