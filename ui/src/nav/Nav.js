import React, { Component } from 'react';
import './Nav.css';

class Nav extends Component {
  render() {
    return (
      <div className="container">
        {this.props.menu}
      </div>
    );
  }
}

export default Nav;