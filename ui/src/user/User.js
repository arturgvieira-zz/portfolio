import React, { Component } from 'react';
import './User.css';
import Account from './components/account/Account.js';
import Profile from './components/profile/Profile.js';

class User extends Component {
  render() {
    return (
      <div className="User">
        <nav>
          <section className="wrapper">
            <Account />
            <Profile />
          </section>
        </nav>
      </div>
    );
  }
}

export default User;