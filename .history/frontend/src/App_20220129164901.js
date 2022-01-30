import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Blogs from './components/Blogs';
import Contact from './components/Contact';
import Home from './components/Home';
import Navbar from './components/partials/Navbar';


const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route path='/' component={<Home />}/>
          <Route path='/blogs' component={<Blogs />}/>
          <Route path='/contact' component={<Contact />}/>
          
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App;