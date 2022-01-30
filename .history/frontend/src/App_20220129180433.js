import {BrowserRouter as Router, Router, Routes} from 'react-router-dom';
import Blogs from './components/Blogs';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blogs" element={<Blogs />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
