import React from 'react';
import Blogs from './components/Blogs';
import Contact from './components/Contact';
import Home from './components/Home';
import Navbar from './components/partials/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


const App = () => {
  return (
    <div className="App">
      <Router>
          <Navbar />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/blogs" element={<Blogs />} />
            <Route exact path="/contact" element={<Contact />} />
          </Routes>
      </Router>
    </div>
  )
}

export default App;