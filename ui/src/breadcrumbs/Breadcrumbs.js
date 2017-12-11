import React, { Component } from 'react';
import './Breadcrumbs.css';

class Breadcrumbs extends Component {
  render() {
    return (
      <div className="Breadcrumbs">
        <span><a className="part" href="https://portfolio.arturgvieira.com">Home</a> /</span>
      </div>
    );
  }
}

export default Breadcrumbs;