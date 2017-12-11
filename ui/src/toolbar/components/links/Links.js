import React, { Component } from 'react';
import './Links.css';

class Links extends Component {
  render() {
    return (
      <div className="Links">
        <span className="item"><a href="https://portfolio.arturgvieira.com">Home</a></span>
        <span className="item"><a href="https://arturgvieira.com" rel="noopener noreferrer" target="_blank">Website</a></span>
        <span className="item"><a href="https://arturgvieira.quip.com" rel="noopener noreferrer" target="_blank">Hire</a></span>
      </div>
    );
  }
}

export default Links;