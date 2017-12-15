import React, { Component } from 'react';
import './Nav.css';

class Nav extends Component {
  render() {
    return (
      <div className="Nav">
        {this.props.menu}
      </div>
    );
  }
}

export default Nav;