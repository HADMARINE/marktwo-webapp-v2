import React, { Component } from 'react';
import '../../../styles/tailwind.css';
import styled, { createGlobalStyle } from 'styled-components';

import '../../../styles/index.scss';

const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  background-color:rgb(24,24,24);
  color: white !important ;
}
.form-control{
  
  background-color: rgb(60,60,60) !important;
  color: white !important;
  border-color: black !important;

}
`;
export default class Product extends Component<any> {
  constructor(props: any) {
    super(props);
  }
  state = {
    img: this.props.img,
    title: this.props.title,
    content: this.props.content,
    link: this.props.link,
    maclink: this.props.maclink
  };
  handleOpenLink = () => {
    window.location.replace(this.state.link);
  };
  handleOpenMacLink = () => {
    window.location.replace(this.state.maclink);
  };
  render() {
    const windowLink = (
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
        onClick={this.handleOpenLink}
      >
        Download
      </button>
    );

    const windowMacLink = (
      <>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
          onClick={this.handleOpenLink}
          style={{ marginRight: '1rem' }}
        >
          Windows
        </button>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
          onClick={this.handleOpenMacLink}
        >
          Mac
        </button>
      </>
    );
    return (
      <>
        <GlobalStyle />
        <div
          className="max-w-sm rounded overflow-hidden shadow-lg"
          style={{ margin: '1rem' }}
        >
          <img
            className="w-full"
            src={this.state.img}
            alt="Product Photo"
            style={{
              height: '200px',
              objectFit: 'contain',
              borderRadius: '15px'
            }}
          />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">{this.state.title}</div>
            <p className="text-700 text-base">{this.state.content}</p>
          </div>
          <div
            className="px-6 py-4"
            style={{
              display: 'flex',
              justifyContent: 'center'
            }}
          >
            <div>{!this.state.maclink ? windowLink : windowMacLink}</div>
          </div>
        </div>
      </>
    );
  }
}
