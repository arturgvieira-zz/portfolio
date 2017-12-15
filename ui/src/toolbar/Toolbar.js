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
        <section className="container">
          <div className="panel container" >
            <div className="menu">
              <img src={Menu} alt="Menu" onClick={this.props.handleClick} aria-haspopup="true"/>
            </div>
            <div className="title"><Title/></div>
          </div>
          <div className="links"><Links/></div>
          <div className="profile"><Profile/></div>
        </section>
      </div>
    );
  }
}

export default Toolbar;