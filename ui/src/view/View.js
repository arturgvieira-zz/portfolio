import React, { Component } from 'react';
import './View.css';

class View extends Component {
  render() {
    return this.props.view ?  
      (
        <div className="display">
          <h3>{this.props.view.title}</h3>
          <p>{this.props.view.welcome}</p>
          {this.props.view.data !== 'null' ? this.props.load(this.props.view) : null}
        </div>
      )
    :
      (
        <div className="display">
          <h3>Welcome to my Portfolio!</h3>
          <p>I made this, its all in one way, shape or form my creativity. Also those things which, I have been influenced by.</p>
        </div>
      );
  }
}

export default View;