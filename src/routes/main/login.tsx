import React, { Component, Fragment, KeyboardEvent } from 'react';
import { Form, Button, InputGroup, FormControl } from 'react-bootstrap';

import apiUri from '../api/getApiUri';

import '../../styles/index.scss';
import publicIp from 'public-ip';

export default class Login extends Component {
  state = {
    isHinder: true,
    id: '',
    password: '',
    errorMessage: ''
  };

  handleHinder = () => {
    this.setState({ isHinder: !this.state.isHinder });
  };

  handleLogin = async () => {
    const queryBody: any = {
      uid: this.state.id,
      password: this.state.password,
      publicip: await publicIp.v4()
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
        localStorage.setItem('token', data.token.toString());
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

  render() {
    return (
      <Fragment>
        <div className="Style-center">
          <p className="Blank-small" />
          <p className="Text-large Text-bold">Login</p>
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
                <Button onClick={this.handleHinder}>
                  {this.state.isHinder ? '보이기' : '숨기기'}
                </Button>
              </InputGroup.Append>
            </InputGroup>
          </div>
          <p className="Blank-xsmall" />
          {this.state.errorMessage ? (
            <span className="Module-errormessage">
              {this.state.errorMessage}
            </span>
          ) : (
            <span style={{ color: 'white' }}>&nbsp;</span>
          )}
          <div className="Module-buttonstyle">
            <p className="Module-button" onClick={this.handleLogin}>
              <span>Login</span>
            </p>
          </div>
        </div>
      </Fragment>
    );
  }
}
