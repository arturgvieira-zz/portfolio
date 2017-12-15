import React, { Component } from 'react';
import './Content.css';

class Content extends Component {
  content = (obj) => {

    const div = {
      cursor: 'pointer',
      margin: '15px',
      padding: '5px 15px',
      color: '#2196f3',
    };
    
    if(obj){
      return obj.map( el => 
        (
          <div className="display">
            <Anchor name={ el.title }/>
            { el.tags.heading === true ? 
            (
              <div><h2 className="section">{el.title}</h2><div className="heading"></div></div>
            ) 
            : 
            (
              <div><h3 className="section">{el.title}</h3><div className="item"></div></div>
            ) 
            }
            <div><h4 className="info">{el.subtitle}</h4></div>
            <div><p>{el.description}</p></div>
          </div>
        ));
    }else {
      return null;
    }
  }
  
  render() {
    return (
      <div className="Content">
        { !this.props.content ? null : this.content(this.props.content)}
      </div>
    );
  }
}

const Anchor = props => {
  return (
    <a {...props}>{ props.children }</a>
  );
}

export default Content;