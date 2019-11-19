import React, { Component, Fragment } from 'react';

import '../../styles/index.scss';
import { string, bool } from 'prop-types';

export default class Home extends Component {
  constructor(props: any) {
    super(props);
    document.title = 'dodoli.net';
  }
  componentWillMount() {
    let login: any = false;

    if (login === false) {
    }
  }
  render() {
    return (
      <Fragment>
        <div className="Style-center">
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
