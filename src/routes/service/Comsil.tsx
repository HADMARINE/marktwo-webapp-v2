import React, { Component } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import Product from './components/Product';
import apiUri from '../api/getApiUri';
const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  color : rgb(24,24,24);
}`;
const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;
export default class Comsil extends Component {
  render() {
    return (
      <>
        <GlobalStyle />
        <Product
          img="https://occ-0-988-993.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABSpHMNyvIRy6PolVWkmMg80JA0Kdcldq3vIxohYsRrtBKVZEyJAW6ls4b6EoKP7DzCQ6Fvnq5C694tN5eN06_Hb5gHp2.webp?r=105"
          title="타이틀"
          content="컨텐트ㅓ라이너라ㅣㅇ너ㅣㅏ렁니ㅏㅓㄹㄴ이ㅏㅓ린어리ㅏㅇ너리ㅏㄴ어리ㅏㅇ너ㅣ라ㅓㅇ니ㅏ렁니ㅏ러ㅣㅏㅇ너리나러ㅣ아너링너ㅏㄹ"
          link="/"
        />
        <div></div>
      </>
    );
  }
}
