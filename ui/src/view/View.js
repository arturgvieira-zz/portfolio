import React, { Component } from 'react';
import './View.css';

class View extends Component {
  render() {
    return this.props.view ?  
      (<h3>{this.props.view.title}</h3>)
    :
      (<h3>Welcome</h3>);
  }
}

export default View;