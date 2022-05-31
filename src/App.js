import './App.css';
import NavbarComp from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Routes is equal to switch
import About from './components/about';
import Contact from './components/contact';
import Home from './components/home';


function App() {
  return (
    <div className="wrapper">
      <Router>
        <NavbarComp />
        <br />
        <br />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>

      </Router>
      
   </div>
  );
}

export default App;
