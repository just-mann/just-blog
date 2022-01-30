import './App.css';
import { Switch, Route, BrowserRouter as Router} from 'react-router-dom';
import Navbar from './components/partials/Navbar';
import Home from './components/Home';
import Blogs from './components/Blogs';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" >
            <Home />
          </Route>
          <Route exact path="/blogs">
            <Blogs />
          </Route>
          <Route exact path="/contact">
            <Contact />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
