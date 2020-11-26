/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
import logo from './assets/natekruck.png';
import './projects/App.css';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Projects from './projects/Projects.js';
import About from './About';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      
      <div className="navigation">
        <img src={logo} className="logo" alt="Logo Image" />
          <div className="tab-links">
            <Link to="/" className="tab">Projects</Link>
            {/* <Link to="/articles" className="tab">Articles</Link> */}
            <Link to="/about" className="tab">About Me</Link>
          </div>
      </div>

          <div className="project-links">
            <Route exact path ="/" component={Projects} />
            {/* <Route exact path ="/articles" component={Articles} /> */}
            <Route exact path ="/about" component={About} />
          </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
