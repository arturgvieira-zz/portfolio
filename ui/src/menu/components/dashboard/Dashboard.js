import React, { Component } from 'react';
import './Dashboard.css';

class Dashboard extends Component {
  render() {
    return (
      <div className="Dashboard">
        <div className="container">
          <div className="button" onClick={this.props.handleClick}>
            <p>Quiet Mode</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;