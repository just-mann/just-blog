import './App.css';
import Navbar from './components/partials/Navbar';
import Home from './components/Home';
import Blogs from './components/Blogs';
import Contact from './components/Contact';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          
        </Switch>
      </Router>
    </div>
  );
}

export default App;
