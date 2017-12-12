import React, { Component } from 'react';
import './View.css';

class View extends Component {
  render() {
    return (
      <span className="View">
        <h2>{this.props.message.title}</h2>
        
      </span>
    );
  }
}

export default View;