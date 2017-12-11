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
        <nav>
          <section className="wrapper">
            <div className="menu">
              <img src={Menu} alt="Menu" />
            </div>
            <Title />
            <Links />
            <Profile />
          </section>
        </nav>
      </div>
    );
  }
}

export default Toolbar;