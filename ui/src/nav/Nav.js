import React, { Component } from 'react';
import './Nav.css';

class Nav extends Component {
  render() {
    return (
      <div className="container">
        {this.props.load(this.props.nav)}
      </div>
    );
  }
}

export default Nav;