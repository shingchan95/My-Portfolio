import Navbar from './components/Navbar';
import Homepage from './pages/Home';
import Aboutme from './pages/Aboutme';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Navbar />
      <div className="flex-column justify-flex-start min-100-vh">
        <div>
          <Routes>
            <Route path= "/" 
            element={<Homepage />}
            />

            <Route path= "/aboutme"
            element={<Aboutme />} 
            />

            <Route path= "/projects" 
            element={<Projects />} 
            />

            <Route path= "/contact"
            element={<Contact />} 
            />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;

