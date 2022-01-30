import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';


const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' component={<Home />}/>
          
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;