import React, { Component, Fragment } from 'react';

import styles, { createGlobalStyle } from 'styled-components';
import '../../styles/index.scss';

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

export default class Home extends Component {
  constructor(props: any) {
    super(props);
    document.title = 'dodoli.net';
  }
  state = {
    isLogin: false
  };
  componentWillMount() {
    if (localStorage.getItem('token')) {
      this.setState({ isLogin: true });
    }
  }
  render() {
          <div>
            <p className="Blank-small" />
            <p className="Text-medium">하루를 되돌아봐요</p>
            <p className="Text-xlarge Text-bold">dodol:i</p>
            <p className="Text-small Text-light">
              여기에는 아마 사진이 들어갈 것입니다
            </p>
          </div>
          <div></div>
        </div>
      </Fragment>
    );
  }
}
