import React, { Component } from 'react';
import './Dashboard.css';

class Dashboard extends Component {
  render() {
    return (
      <div className="Dashboard">
        <div className="button" onClick={this.props.handleClick}>
          <p className="quiet">Quiet Mode</p>
        </div>
      </div>
    );
  }
}

export default Dashboard;