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
          <div className="item">
            <p onClick={() => this.handleClick("projects")}>Projects</p>
          </div>
          <div className="item">
            <p onClick={() => this.handleClick("frameworks")}>Frameworks</p>
          </div>
          <div className="item">
            <p onClick={() => this.handleClick("languages")}>Languages</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Nav;