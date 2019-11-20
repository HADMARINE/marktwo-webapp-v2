import React, { Component } from 'react';
import { Button, InputGroup, FormControl } from 'react-bootstrap';
import apiUri from '../api/getApiUri';
import '../../styles/index.scss';
import styles, { createGlobalStyle } from 'styled-components';

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
export default class Register extends Component {
  state = {
    id: '',
    password: '',
    passwordCheck: '',
    nickname: '',
    email: '',
    isLoading: false,
    formErrors: { id: '', password: '', nickname: '', email: '' }
  };

  handleChange = async (e: any) => {
    const target = e.target;
    await this.setState({
      [target.name]: e.target.value
    });
    this.verifyForm(target);
  };

  verifyForm = (target: any) => {
    switch (target.name) {
      case 'id':
        if (target.value.length < 4) {
          this.setState({
            formErrors: {
              ...this.state.formErrors,
              id: '아이디는 4글자 이상이어야 합니다.'
            }
          });
          //this.state.formErrors.id = 'test';
          return;
        }
        this.setState({
          formErrors: {
            ...this.state.formErrors,
            id: ''
          }
        });
        this.handleOverlap(target);
        return;

      case 'password':
      case 'passwordCheck':
        const passwordRegex = new RegExp(
          /^((?=\S*?[a-z])(?=\S*?[0-9]).{5,})\S$/
        );
        if (!passwordRegex.test(target.value)) {
          this.setState({
            formErrors: {
              ...this.state.formErrors,
              password: '영문과 숫자를 포함한 6글자 이상이어야 합니다.'
            }
          });
          return;
        }
        if (this.state.password !== this.state.passwordCheck) {
          this.setState({
            formErrors: {
              ...this.state.formErrors,
              password: '비밀번호가 일치하지 않습니다.'
            }
          });
          return;
        }
        this.setState({
          formErrors: {
            ...this.state.formErrors,
            password: ''
          }
        });
        return;
      case 'nickname':
        this.handleOverlap(target);
        break;
      case 'email':
        const emailRegex = new RegExp(
          /^(?:[a-zA-Z0-9])([-_0-9a-zA-Z]+(\.[-_0-9a-zA-Z]+)*|^\"([\001-\010\013\014\016-\037!#-\[\]-\177]|\\[\001-011\013\014\016-\177])*\")@(?:[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?\.)+[a-zA-Z]{2,6}\.?$/
        );
        if (!emailRegex.test(this.state.email)) {
          this.setState({
            formErrors: {
              ...this.state.formErrors,
              email: '정확한 이메일을 입력해주세요.'
            }
          });
          break;
        }
        this.setState({
          formErrors: {
            ...this.state.formErrors,
            email: ''
          }
        });
        this.handleOverlap(target);
        break;

      default:
        return;
    }
  };

  handleRegister = () => {
    this.setState({ isLoading: true });
    if (
      this.state.formErrors.email ||
      this.state.formErrors.id ||
      this.state.formErrors.nickname ||
      this.state.formErrors.password
    ) {
      alert('잘못 입력된 정보를 다시 확인하세요.');
      this.setState({ isLoading: false });
      return;
    }
    if (
      !this.state.email ||
      !this.state.id ||
      !this.state.nickname ||
      !this.state.password
    ) {
      alert('비어있는 정보가 있습니다.');
      this.setState({ isLoading: false });
      return;
    }
    const queryBody: any = {
      uid: this.state.id,
      password: this.state.password,
      nickname: this.state.nickname,
      email: this.state.email
    };
    const queryHeader: any = {
      'Content-Type': 'application/json'
    };
    fetch(apiUri + '/user/', {
      method: 'POST',
      body: JSON.stringify(queryBody),
      headers: queryHeader
    })
      .then(res => res.json())
      .then(data => {
        switch (data.status) {
          case 400:
            alert('Error 400 : ' + data.message);
            this.setState({ isLoading: false });
            return;
          case 422:
            alert('Error 422 : ' + data.message);
            this.setState({
              isLoading: false,
              formErrors: {
                ...this.state.formErrors,
                id: '다른 아이디로 시도해주세요.'
              },
              id: ''
            });
            return;
          case 500:
            alert('Error 500 : ' + data.message);
            this.setState({ isLoading: false });
            return;
        }
        if (data.state === true) {
          alert('회원가입에 성공했습니다.');
          window.location.replace('/login');
          return;
        }
      });
  };

  handleOverlap = async (target: any) => {
    const queryBody: any = {
      type: target.name,
      content: target.value
    };
    const queryHeader: any = {
      'Content-Type': 'application/json'
    };

    fetch(apiUri + '/user/overlap/', {
      method: 'POST',
      body: JSON.stringify(queryBody),
      headers: queryHeader
    })
      .then(res => res.json())
      .then(data => {
        if (data.status === 400) {
          alert('Client Error : ' + data.message);
        }
        if (data.overlap === true) {
          this.setState({
            formErrors: {
              ...this.state.formErrors,
              [target.name]: '이미 사용중입니다.'
            }
          });
          return;
        }
        this.setState({
          formErrors: {
            ...this.state.formErrors,
            [target.name]: ''
          }
        });
        return;
      })
      .catch(e => {
        alert('서버 연결에 실패했습니다 : ' + e);
        window.location.replace('/');
      });
    return;
  };

  render() {
    return (
      <>
        <div className="Style-center">
          <GlobalStyle />
          <div className="Blank-small" />
          <p
            className="Text-bold"
            style={{ letterSpacing: '4px', fontSize: '3rem' }}
          >
            REGISTER
          </p>
          <div className="Blank-xsmall" />
          <div className="Module-input">
            <FormControl
              placeholder="ID"
              type="id"
              size="lg"
              value={this.state.id}
              onChange={this.handleChange}
              name="id"
            />
            <div className="Blank-xxsmall" />
            {this.state.formErrors.id ? (
              <span className="Module-errormessage">
                {this.state.formErrors.id}
              </span>
            ) : (
              <span style={{ color: 'black' }}>&nbsp;</span>
            )}
            <div className="Blank-xxsmall" />
            <FormControl
              placeholder="Password"
              type="password"
              size="lg"
              value={this.state.password}
              onChange={this.handleChange}
              name="password"
            />
            <div className="Blank-xxsmall" />
            <FormControl
              placeholder="Verify password"
              type="password"
              size="lg"
              value={this.state.passwordCheck}
              onChange={this.handleChange}
              name="passwordCheck"
            />
            <div className="Blank-xxsmall" />
            {this.state.formErrors.password ? (
              <span className="Module-errormessage">
                {this.state.formErrors.password}
              </span>
            ) : (
              <span style={{ color: 'white' }}>&nbsp;</span>
            )}
            <div className="Blank-xxsmall" />
            <FormControl
              placeholder="Nickname"
              type="name"
              size="lg"
              value={this.state.nickname}
              onChange={this.handleChange}
              name="nickname"
            />
            <div className="Blank-xxsmall" />
            {this.state.formErrors.nickname ? (
              <span className="Module-errormessage">
                {this.state.formErrors.nickname}
              </span>
            ) : (
              <span style={{ color: 'white' }}>&nbsp;</span>
            )}
            <div className="Blank-xxsmall" />
            <FormControl
              placeholder="Email"
              type="email"
              size="lg"
              value={this.state.email}
              onChange={this.handleChange}
              name="email"
            />
            <div className="Blank-xxsmall" />
            {this.state.formErrors.email ? (
              <span className="Module-errormessage">
                {this.state.formErrors.email}
              </span>
            ) : (
              <span style={{ color: 'white' }}>&nbsp;</span>
            )}
            <div className="Blank-xxsmall" />
            <p className="Text-small Text-xlight">
              회원가입 시{' '}
              <a href="/terms">
                <b style={{ color: 'skyblue' }}>이용 약관</b>
              </a>
              에 동의한 것으로 간주 됩니다.
            </p>
            <div className="Blank-xsmall" />
            <Button
              size="lg"
              variant="dark"
              onClick={this.handleRegister}
              disabled={this.state.isLoading}
            >
              {!this.state.isLoading ? '회원 가입' : 'Loading...'}
            </Button>
            <div className="Blank-small" />
          </div>
        </div>
      </>
    );
  }
}
