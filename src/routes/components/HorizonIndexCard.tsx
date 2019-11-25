import React, { Component } from 'react';
import '../../styles/tailwind.css';
import styled, { createGlobalStyle } from 'styled-components';
import './HorizonIndexCard.scss';
const GlobalStyle = createGlobalStyle`
* {

}
.form-control{
  
  background-color: rgb(60,60,60) !important;
  color: white !important;
  border-color: black !important;

}`;

const Wrapper = styled.span`
  color: white;
  background-color: rgb(24, 24, 24);
`;

export default class HorizonIndexCard extends Component<any> {
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
    const WhiteCard = (
      <div
        onClick={this.handleOpenLink}
        className="max-w-sm rounded overflow-hidden shadow-lg Module-background"
        style={{ margin: '1rem', backgroundColor: 'rgb(60,60,60)' }}
      >
        <div onClick={this.handleOpenLink} className="px-6 py-4">
          <div className="font-bold text-xl mb-2" style={
                {fontSize :'4.3rem'}
              }>
            {this.state.title}
          </div>
          <p className="text-700 text-base" onClick={this.handleOpenLink}>
            {this.state.content}
          </p>
        </div>
      </div>
    );
    return (
      <>
        <GlobalStyle />
        <Wrapper>{WhiteCard}</Wrapper>
      </>
    );
  }
}
