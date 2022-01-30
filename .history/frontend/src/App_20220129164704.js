import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Blogs from './components/Blogs';
import Home from './components/Home';
import Navbar from './components/partials/Navbar';


const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' component={<Home />}/>
          <Route path='/blogs' component={<Blogs />}/>
          
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;