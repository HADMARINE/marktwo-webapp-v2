import React, { Component } from 'react';
import Product from './Product';

export default class ProductList extends Component<any> {
  static defaultProps = {
    data: []
  };

  render() {
    const data = JSON.parse(this.props.data);
    const list = data.map((info: any) => {
      <Product
        key={info.id}
        img={info.img}
        content={info.content}
        link={info.link}
      />;
    });
    return <div>{list}</div>;
  }
}
