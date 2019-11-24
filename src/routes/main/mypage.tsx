import React, { Component } from 'react';
import '../../styles/index.scss';
import { Button, InputGroup, FormControl } from 'react-bootstrap';
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
  state = {
    id: '',
    email: '',
    name: '',

    login: false
  };
  handleFetchUserData = () => {
    const queryHeader: any = {
      'x-access-token': sessionStorage.getItem('token')
    };
    try {
      fetch(apiUri + '/user/data', {
        method: 'POST',
        headers: queryHeader
      })
        .then(res => res.json())
        .then(data => {
          if (data.status) {
            const error: any = 'Error ' + data.status + ' : ' + data.message;
            this.handleTokenVerifyFail(error);
          }
          this.setState({
            login: true,
            id: data.uid,
            email: data.email,
            name: data.name
          });
        })
        .catch(e => {
          this.handleTokenVerifyFail(e);
        });
    } catch (e) {
      alert('err');
    }
  };

  handleTokenVerifyFail = (error: string) => {
    localStorage.removeItem('token');
    sessionStorage.removeItem('token');
    window.location.replace('/');
    alert(error);
  };

  componentWillMount() {
    this.handleFetchUserData();
  }

  render() {
    return (
      <>
        <GlobalStyle />
        <div className="Blank-small" />
        <Wrapper>
          <p
            style={{ fontSize: '3rem', fontWeight: 900, letterSpacing: '4px' }}
          >
            MY PAGE
          </p>
          <div className="Module-input w-50">
            <div className="Blank-small" />
            <InputGroup>
              <InputGroup.Prepend>
                <InputGroup.Text>ID</InputGroup.Text>
              </InputGroup.Prepend>
              <FormControl value={this.state.id} />
            </InputGroup>
            <div className="Blank-xsmall" />
            <InputGroup>
              <InputGroup.Prepend>
                <InputGroup.Text>Email</InputGroup.Text>
              </InputGroup.Prepend>
              <FormControl value={this.state.email} />
              <InputGroup.Append>
                <Button variant="dark">변경</Button>
              </InputGroup.Append>
            </InputGroup>
            <div className="Blank-xxsmall" />
            <InputGroup>
              <InputGroup.Prepend>
                <InputGroup.Text>name</InputGroup.Text>
              </InputGroup.Prepend>
              <FormControl value={this.state.name} />
              <InputGroup.Append>
                <Button variant="dark">변경</Button>
              </InputGroup.Append>
            </InputGroup>
          </div>
        </Wrapper>
      </>
    );
  }
}
