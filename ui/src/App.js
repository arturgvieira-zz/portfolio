import React, { Component } from 'react';
import './App.css';
import Breadcrumbs from './breadcrumbs/Breadcrumbs.js';
import User from './user/User.js';
import View from './view/View.js';
import Dashboard from './dashboard/Dashboard.js';
import Nav from './nav/Nav.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quiet: false,
    };
  }
  
  handleChange = () => {
    this.setState({ quiet: !this.state.quiet });
  }
  
  render() {
    
    const header = (
      <header className="header container card">
        <nav className="nav">
          <span className="title"><h2>Portfolio</h2></span>
        </nav>
        <User />
        <Breadcrumbs />
      </header>
    );
    
    const snippet = (
        <div className="title embossed"><h4>Portfolio</h4></div>
    );
    
    return (
      <div className="App">
        {this.state.quiet ? snippet : header}
        <main className="wrapper">
            <aside className="dashboard">
              <Dashboard handleClick={this.handleChange}/>
            </aside>
            <section className="content">
              <article className="navigation">
                <Nav />
              </article>
              <article className="view">  
                <View />
              </article>
            </section>
        </main>
      </div>
    );
  }
}

export default App;
