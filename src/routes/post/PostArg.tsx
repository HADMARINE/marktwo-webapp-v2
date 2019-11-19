import React, { Component } from 'react';

import './PostArg.scss';

export default class PostArg extends Component<any> {
  constructor(props: any) {
    super(props);
  }
  state = {
    title: this.props.title,
    tags: this.props.tags,
    content: this.props.content
  };

  render() {
    return (
      <>
        <div className="Module-main">
          <span className="Module-header">
            <span className="Module-title">{this.state.title}</span>
            <span className="Module-tags">{this.state.tags}</span>
          </span>
          <div>
            <p>{this.state.content}</p>
          </div>
        </div>
      </>
    );
  }
}
