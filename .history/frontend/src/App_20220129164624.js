import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Navbar from './components/partials/Navbar';


const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' component={<Home />}/>
          
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;