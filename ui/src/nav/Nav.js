import React, { Component } from 'react';
import './Nav.css';

class Nav extends Component {
  
  load = (obj) => {
    const temp = [];
    
    const div = {
      cursor: 'pointer',
      margin: '10px',
      padding: '5px 15px',
    };
    
    if(obj){
      Object.entries(this.props.view.data).forEach(([key, value]) => {
        temp.push(value.title);
      });
    }
    return temp.map( el => 
      (
        <div
        style={div}
        key={el} 
        onClick={() => this.handleClick("data/" + el.toLowerCase())}>
          <a href="#view">{el}</a>
        </div>
      )
    );
  }
  
  handleClick = (e) => {
    this.props.handleRequest(e);
  }
  
  render() {
    return (
      <div className="container">
        {this.load(this.props.view)}
      </div>
    );
  }
}

export default Nav;