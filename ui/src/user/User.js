import React, { Component } from 'react';
import './User.css';
import Options from './components/options/Options.js';
import Account from './components/account/Account.js';
import Profile from './components/profile/Profile.js';

class User extends Component {
  render() {
    return (
      <div className="User">
        <nav>
          <section className="wrapper">
            <Options />
            <Account />
            <Profile />
          </section>
        </nav>
      </div>
    );
  }
}

export default User;