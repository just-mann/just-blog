import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Blogs from './components/Blogs';
import Contact from './components/Contact';
import Home from './components/Home';
import Navbar from './components/partials/Navbar';


const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}>
          <Route path='/blogs' element={<Blogs />}>
          <Route path='/contact' element={<Contact />}>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;