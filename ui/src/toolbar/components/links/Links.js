import React, { Component } from 'react';
import './Links.css';

class Links extends Component {
  render() {
    return (
      <div className="Links">
        <span className="item"><a href="https://portfolio.arturgvieira.com">Home</a></span>
        <span className="item"><a href="https://arturgvieira.com">Website</a></span>
        <span className="item"><a href="https://arturgvieira.quip.com">Hire</a></span>
      </div>
    );
  }
}

export default Links;