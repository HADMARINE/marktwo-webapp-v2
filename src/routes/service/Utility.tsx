import React, { Component } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import ProductInfoList from './components/ProductInfoList';
import apiUri from '../api/getApiUri';
import verifyToken from '../middlewares/verifyToken'

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
  state = { data: null };

  handleDataRecieve = async () => {
    // const queryHeader: any = {
    //   'Content-Type': 'application/json'
    // };
    await fetch(apiUri + '/data/utility', {
      method: 'GET'
      //   headers: queryHeader
    })
      .then(res => res.json())
      .then(data => {
        this.setState({
          data: JSON.stringify(data.result)
        });
      })
      .catch(e => {
        alert(e);
      });
  };
  async componentDidMount() {
    await verifyToken();
    await this.handleDataRecieve();
  }
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
          <ProductInfoList data={this.state.data} />
        </Wrapper>
      </>
    );
  }
}
