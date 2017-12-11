import React, { Component } from 'react';
import './App.css';
import Breadcrumbs from './breadcrumbs/Breadcrumbs.js';
import Toolbar from './toolbar/Toolbar.js';
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
        <Toolbar />
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
              <Nav />
            </aside>
            <section className="content">
              <View />
            </section>
        </main>
      </div>
    );
  }
}

export default App;
