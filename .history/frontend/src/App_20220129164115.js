import React from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import Blogs from './components/Blogs';
import Contact from './components/Contact';
import Home from './components/Home';
import Navbar from './components/partials/Navbar';

const App = () => {
  return (
    <div className="App">
      <Router>
        <Navbar />
        
          <Route exact path="/" >
            <Home />
          </Route>
          <Route exact path="/blogs">
            <Blogs />
          </Route>
          <Route exact path="/contact">
            <Contact />
          </Route>
        
      </Router>
    </div>
  )
}

export default App;