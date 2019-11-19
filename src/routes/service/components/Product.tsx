import React, { Component } from 'react';
import '../../../styles/tailwind.css';
import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  background-color:rgb(24,24,24);
  color:white !important;
}
.form-control{
  
  background-color: rgb(60,60,60) !important;
  color: white !important;
  border-color: black !important;

}`;
export default class Product extends Component<any> {
  constructor(props: any) {
    super(props);
  }
  state = {
    img: this.props.img,
    title: this.props.title,
    content: this.props.content,
    link: this.props.link
  };
  handleOpenLink = () => {
    window.location.replace(this.state.link);
  };
  render() {
    return (
      <>
        <GlobalStyle />
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
          <img className="w-full" src={this.state.img} alt="Product Photo" />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">{this.state.title}</div>
            <p className="text-gray-700 text-base">{this.state.content}</p>
          </div>
          <div
            className="px-6 py-4"
            style={{ display: 'flex', justifyContent: 'center' }}
          >
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
              onClick={this.handleOpenLink}
            >
              Download
            </button>
          </div>
        </div>
      </>
    );
  }
}
