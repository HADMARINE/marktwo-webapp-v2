import React, { Component } from 'react';
import Product from './Product';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

export default class ProductList extends Component<any> {
  static defaultProps = {
    data: []
  };

  render() {
    let data;
    let list;
    try {
      data = JSON.parse(this.props.data);
      list = data.map((info: any) => (
        <Product
          key={info.id}
          title={info.title}
          img={info.img}
          content={info.content}
          link={info.link}
          maclink={info.maclink}
        />
      ));
    } catch (e) {
      console.log(e);
      list = (
        <Product
          key="0"
          img="https://occ-0-988-993.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABSpHMNyvIRy6PolVWkmMg80JA0Kdcldq3vIxohYsRrtBKVZEyJAW6ls4b6EoKP7DzCQ6Fvnq5C694tN5eN06_Hb5gHp2.webp?r=105"
          content="표시할 데이터가 없습니다."
          title="데이터가 없습니다."
          link="/"
        />
      );
    }

    return <Wrapper>{list}</Wrapper>;
  }
}
