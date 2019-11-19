import React, { Component, Fragment } from 'react';

import '../../styles/index.scss';

class Notfound extends Component {
  render() {
    return (
      <>
        <div className="Style-center Style-overflow-hidden">
          <div>
            <p className="Module-notfoundmove" />
            <p className="Module-notfound">&nbsp;404&nbsp;</p>
          </div>
          <p className="Module-notfoundmove" />
          <p className="Text-medium"> Not found</p>
          <div className="Module-not" />
          <p className="Text-xsmall">
            <code>무엇을 찾아 헤메던 것일까</code>
          </p>
        </div>
      </>
    );
  }
}

export default Notfound;
