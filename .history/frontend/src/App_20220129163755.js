import React from 'react';
import './styles.css';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Portfolio from './components/pages/Portfolio';
import Contact from './components/pages/Contact';
import NotFound from './components/pages/NotFound';
import Footer from './components/pages/partials/Footer';
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