import React, { Component } from 'react';
import './View.css';

class View extends Component {
  render() {
    return this.props.view ?  
      (
        <div className="display">
          <h3>{this.props.view.title}</h3>
          <p>{this.props.view.welcome}</p>
          {this.props.view.data != 'null' ? this.props.load(this.props.view) : null}
        </div>
      )
    :
      (<h3>Welcome</h3>);
  }
}

export default View;