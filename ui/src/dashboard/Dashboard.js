import React, { Component } from 'react';
import './Dashboard.css';

class Dashboard extends Component {
  render() {
    return (
      <div className="Dashboard">
        <div className="button" >
          <p className="quiet" 
             onClick={this.props.handleClick}>Quiet Mode</p>
        </div>
      </div>
    );
  }
}

export default Dashboard;