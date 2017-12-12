import React, { Component } from 'react';
import './Nav.css';

class Nav extends Component {
  
  handleClick = (e) => {
    this.props.handleChange(e);
  }
  
  render() {
    return (
      <div className="Nav">
        <div className="container">
          <div className="item">
            <p onClick={() => this.handleClick("projects")}>Projects</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Nav;