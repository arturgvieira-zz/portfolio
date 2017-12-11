import React, { Component } from 'react';
import './Nav.css';

class Nav extends Component {
  render() {
    return (
      <div className="Nav">
        <p className="projects card">Projects</p>
        <p className="card">Frameworks</p>
        <p className="card">Languages</p>
      </div>
    );
  }
}

export default Nav;