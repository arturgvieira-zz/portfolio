import React, { Component } from 'react';
import './Nav.css';

class Nav extends Component {
  
  handleClick = (e) => {
    this.props.handleRequest(e);
  }
  
  render() {
    return (
      <div className="Nav">
        <div className="container">
          <div className="item" onClick={() => this.handleClick("projects")}>Projects</div>
          <div className="item" onClick={() => this.handleClick("frameworks")}>Frameworks</div>
          <div className="item" onClick={() => this.handleClick("languages")}>Languages</div>
        </div>
      </div>
    );
  }
}

export default Nav;