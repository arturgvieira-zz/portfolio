import React, { Component } from 'react';
import './Toolbar.css';
import Menu from './menu.svg';
import Title from './components/title/Title.js';
import Links from './components/links/Links.js';
import Profile from './components/profile/Profile.js';

class Toolbar extends Component {
  render() {
    return (
      <div className="Toolbar">
        <section className="wrapper">
          <span className="menu">
            <img src={Menu} alt="Menu" />
          </span>
          <span className="title"><Title/></span>
          <span className="links"><Links/></span>
          <span className="profile"><Profile/></span>
        </section>
      </div>
    );
  }
}

export default Toolbar;