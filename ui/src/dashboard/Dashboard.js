import React, { Component } from 'react';
import './Dashboard.css';

class Dashboard extends Component {
  render() {
    return (
      <span className="Dashboard">
        <div className="button" onClick={this.props.handleClick}>
          <p className="quiet">Quiet Mode</p>
        </div>
      </span>
    );
  }
}

export default Dashboard;