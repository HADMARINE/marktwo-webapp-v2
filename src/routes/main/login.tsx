import React, { Component, Fragment, KeyboardEvent } from 'react';
import { Form, Button, InputGroup, FormControl } from 'react-bootstrap';

import apiUri from '../api/getApiUri';
import styles, { createGlobalStyle } from 'styled-components';

import '../../styles/index.scss';
import publicIp from 'public-ip';

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
  :focus{
    /* background-color:black; */
  }

}`;

const BackgroundImg = styles.img`

`;

export default class Login extends Component {
  state = {
    isHinder: true,
    id: '',
    password: '',
    errorMessage: '',
    isRemember: false
  };

  handleHinder = () => {
    this.setState({ isHinder: !this.state.isHinder });
  };

  handleLogin = async () => {
    const queryBody: any = {
      uid: this.state.id,
      password: this.state.password,
      userip: await publicIp.v4()
    };
    const queryHeader: any = {
      'Content-Type': 'application/json'
    };
    let errorMessage: string = '';

    await fetch(apiUri + '/auth/', {
      method: 'POST',
      body: JSON.stringify(queryBody),
      headers: queryHeader
    })
      .then(res => res.json())
      .then(data => {
        if (!data.token) {
          // loginfail
          errorMessage = data.message;
          return;
        }
        // loginsuccess
        sessionStorage.setItem('token', data.token.toString());
        if (this.state.isRemember) {
          localStorage.setItem('token', data.token.toString());
        }
        window.location.replace('/');
      })
      .catch(e => {
        alert('서버 연결에 실패했습니다 : ' + e);
        window.location.replace('/');
      });

    this.setState({ errorMessage: errorMessage });
  };

  handleChange = (e: any) => {
    this.setState({
      [e.target.name]: e.target.value,
      errorMessage: ''
    });
  };

  handleEnterKey = (e: any) => {
    if (e.keyCode === 13) {
      this.handleLogin();
    }
  };

  handleToggle = () => {
    this.setState({
      isRemember: !this.state.isRemember
    });
  };

  render() {
    return (
      <Fragment>
        <GlobalStyle />
        <div className="Style-center">
          <p className="Blank-small" />
          <p
            className="Text-bold"
            style={{ letterSpacing: '4px', fontSize: '3rem' }}
          >
            LOGIN
          </p>
          <p className="Blank-xsmall" />
          <div className="Module-input w-auto">
            <InputGroup>
              {/* <InputGroup.Prepend>
                <InputGroup.Text>ID</InputGroup.Text>
              </InputGroup.Prepend> */}
              <FormControl
                placeholder="ID"
                type="text"
                size="lg"
                value={this.state.id}
                onChange={this.handleChange}
                onKeyDown={this.handleEnterKey}
                name="id"
              />
            </InputGroup>
            <div className="Blank-xxsmall" />
            <InputGroup>
              {/* <InputGroup.Prepend>
                <InputGroup.Text>Password</InputGroup.Text>
              </InputGroup.Prepend> */}
              <FormControl
                placeholder="Password"
                type={this.state.isHinder ? 'password' : 'text'}
                size="lg"
                value={this.state.password}
                onChange={this.handleChange}
                onKeyDown={this.handleEnterKey}
                name="password"
              />
              <InputGroup.Append>
                <Button onClick={this.handleHinder} variant="dark">
                  {this.state.isHinder ? '보이기' : '숨기기'}
                </Button>
              </InputGroup.Append>
            </InputGroup>
          </div>
          <div className="Blank-xsmall" />
          <Form.Check
            type="switch"
            label="Remember me"
            id="remember toggle"
            onChange={this.handleToggle}
          />
          <p className="Blank-xxsmall" />
          {this.state.errorMessage ? (
            <span className="Module-errormessage">
              {this.state.errorMessage}
            </span>
          ) : (
            <span style={{ color: 'white' }}>&nbsp;</span>
          )}
          <div className="Blank-xxsmall" />
          <Button
            variant="dark"
            size="lg"
            style={{ width: '10rem' }}
            onClick={this.handleLogin}
          >
            로그인
          </Button>
          <div className="Blank-xsmall" />
          <div>
            <a href="/register" style={{ color: 'skyblue' }}>
              회원가입{' '}
            </a>
            또는{' '}
            <a href="/find/password" style={{ color: 'skyblue' }}>
              비밀번호 찾기
            </a>
          </div>
        </div>
      </Fragment>
    );
  }
}
