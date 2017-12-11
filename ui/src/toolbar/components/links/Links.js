import React, { Component } from 'react';
import './Links.css';

class Links extends Component {
  render() {
    return (
      <span className="Links">
        <ul>
          <li><a className="item" href="https://portfolio.arturgvieira.com">Home</a></li>
          <li><a className="item" href="https://arturgvieira.com" rel="noopener noreferrer" target="_blank">Website</a></li>
          <li><a className="item" href="https://arturgvieira.quip.com" rel="noopener noreferrer" target="_blank">Hire</a></li>
        </ul>
      </span>
    );
  }
}

export default Links;