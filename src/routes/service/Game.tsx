import React, { Component } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import Product from './components/Product';
import apiUri from '../api/getApiUri';
import ProductInfoList from './components/ProductInfoList';
import '../../styles/index.scss';
import verifyToken from '../middlewares/verifyToken'
const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  color : rgb(24,24,24);
}
body {
    background-color:rgb(24,24,24);
    overflow-y:visible;
}

`;
const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;
export default class Comsil extends Component {
  state = {
    data: null
  };

  handleDataRecieve = async () => {
    // const queryHeader: any = {
    //   'Content-Type': 'application/json'
    // };
    await fetch(apiUri + '/data/game', {
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

  componentWillMount() {
    verifyToken();
    this.handleDataRecieve();
  }
  render() {
    return (
      <>
        <GlobalStyle />
        <div className="Blank-small" />
        <Wrapper>
          <div className="Blank-small" />
          <p className="Text-medium Text-bold">게임</p>
        </Wrapper>
        <Wrapper>
          <ProductInfoList data={this.state.data} />
        </Wrapper>
      </>
    );
  }
}
