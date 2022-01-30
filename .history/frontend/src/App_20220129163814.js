import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import Navbar from './components/pages/partials/Navbar';

const App = () => {
  return (
    <div className="App">
      <Router>
        {/* <Navbar /> */}
        <Switch>
          <Route exact path="/" >
            <Home />
          </Route>
          <Route exact path="/about-me">
            <About />
          </Route>
          <Route exact path="/portfolio">
            <Portfolio />
          </Route>
          <Route exact path="/contact-me">
            <Contact />
          </Route>
          <Route exact path="*">
            <NotFound/>
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  )
}

export default App;