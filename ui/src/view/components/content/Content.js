import React, { Component } from 'react';
import './Content.css';

class Content extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content: null
    };
  }
  
  endpoint = () => {
    fetch("https://us-central1-portfolio-arturgvieira.cloudfunctions.net/api/documents")
      .then(response => {
        return response.json();
      })
      .then(json => {
        json.sort((x, y) => 
          x.tags.level < y.tags.level ? -1 :
            x.tags.level > y.tags.level ? 1 : 
              x.tags.heading === true ? -1 : 
                y.tags.heading === true ? 1 : 0
        );
        this.setState({ content : json });
      })
      .catch(error => {
        alert("Something went wrong. Please try again later.");
    });
  }
  
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
  
  componentDidMount() {
    this.endpoint();
  }
  
  render() {
    return (
      <div className="Content">
        { !this.state.content ? null : this.content(this.state.content)}
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