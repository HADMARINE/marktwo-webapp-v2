import React, { Component } from 'react';

import PostArg from './PostArg';

import '../../styles/index.scss';
export default class Post extends Component {
  render() {
    const tags = ['a', 'b', 'c', 'd', 'e'];
    return (
      <div>
        <div className="Blank-small" />
        <div className="Style-flex-center ">
          <PostArg
            title="반성반성"
            tags={tags}
            content="Contenttestesfjdkfjdkfjdkfjdkfjdkfjdkfdkfjdkfjdkfjdkfjdfdjdkjdkfjdkfjdkfdkfjdkfjdkfj 그래서 그렇다.eteesestestettsetstestesesestsetsejdifjdslfljdsklfjkldsjflk"
          ></PostArg>
          {/* {/* <PostArg
            title="testest"
            tags={tags}
            content="Contenttestesteteesestestettsetstestesesestsetsejdifjdslfljdsklfjkldsjflk"
          ></PostArg> */}
          <PostArg
            title="testest"
            tags={tags}
            content="Contenttestesteteesestestettsetstestesesestsetsejdifjdslfljdsklfjkldsjflk"
          ></PostArg>
        </div>
      </div>
    );
  }
}
