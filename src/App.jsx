import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './home';
import About from './about';
import Profile from './Profile';

const App = () => {
  return (
    <Router>
      <div>

        {/* Switch for routing */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
