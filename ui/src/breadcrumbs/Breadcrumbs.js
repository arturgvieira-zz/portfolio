import React, { Component } from 'react';
import './Breadcrumbs.css';

class Breadcrumbs extends Component {
  render() {
    return (
      <div className="Breadcrumbs">
        <div className="container">
          <a className="part" href="https://portfolio.arturgvieira.com">Home</a>
        </div>
      </div>
    );
  }
}

export default Breadcrumbs;