import React, { Component } from 'react';
import './View.css';

class View extends Component {
  render() {
    return (
      <span className="View">
        <p>{this.props.message}</p>
      </span>
    );
  }
}

export default View;