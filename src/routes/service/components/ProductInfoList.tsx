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
          img="http://marktwo.iptime.org:35492/list/HDD1/SUNRINT_SHARE/static/404error.png"
          content="표시할 데이터가 없습니다."
          title="데이터가 없습니다."
          link="/"
        />
      );
    }

    return <Wrapper>{list}</Wrapper>;
  }
}
