import React, { Component } from 'react';
import './Nav.css';

class Nav extends Component {
  render() {
    return (
      <div className="Nav">
        <div className="card">
          <p>Projects</p>
          <p>Frameworks</p>
          <p>Languages</p>
        </div>
      </div>
    );
  }
}

export default Nav;