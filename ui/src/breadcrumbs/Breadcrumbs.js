import React, { Component } from 'react';
import './Breadcrumbs.css';

class Breadcrumbs extends Component {
  render() {
    return (
      <span className="Breadcrumbs">
        <span><a className="part" href="https://portfolio.arturgvieira.com">Home</a></span>
      </span>
    );
  }
}

export default Breadcrumbs;