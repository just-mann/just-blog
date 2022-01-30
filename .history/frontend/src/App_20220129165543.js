import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Blogs from './components/Blogs';
import Contact from './components/Contact';
import Home from './components/Home';
import Navbar from './components/partials/Navbar';


const App = () => {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path='/'>
            <Home />
          </Route>
          <Route path='/blogs'>
            <Blogs />
          </Route>
          <Route path='/contact'>
            <Contact />
          </Route>
        </Routes>
      </Router>
    </div>
  )
}

export default App;