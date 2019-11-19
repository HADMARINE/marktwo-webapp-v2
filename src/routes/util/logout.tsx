import React, { Component } from 'react';
import { Spinner } from 'react-bootstrap';

import '../../styles/index.scss';

class Logout extends Component {
  componentDidMount() {
    localStorage.removeItem('token');
    sessionStorage.removeItem('userid');
    window.location.replace('/');
  }
  render() {
    return (
      <>
        <div className="Style-center">
          <Spinner
            style={{ marginTop: '10rem', marginBottom: '3rem' }}
            animation="border"
          />
          <h3>Logging out..</h3>
        </div>
      </>
    );
  }
}

export default Logout;
