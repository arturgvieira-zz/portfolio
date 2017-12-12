import React, { Component } from 'react';
import './Nav.css';

class Nav extends Component {
  
  load = (obj) => {
    const temp = [];
    
    const style = {
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
        key={el} 
        onClick={() => this.handleClick("data/" + el.toLowerCase())} 
        style={style}>{el}</div>
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