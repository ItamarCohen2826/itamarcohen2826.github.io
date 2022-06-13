import './App.css';
import NavigationBar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Routes is equal to switch
import About from './components/about';
import Contact from './components/contact';
import Home from './components/home';
import { useMediaQuery } from 'react-responsive';

function App() {
  const isMobileDevice = useMediaQuery({
    query: "(min-device-width: 480px)",
  });

  const isTabletDevice = useMediaQuery({
    query: "(min-device-width: 768px)",
  });

  const isLaptop = useMediaQuery({
    query: "(min-device-width: 1024px)",
  });

  const isDesktop = useMediaQuery({
    query: "(min-device-width: 1200px)",
  });

  const isBigScreen = useMediaQuery({
    query: "(min-device-width: 1201px )",
  });

  let fontSize = 100;
  isDesktop || isBigScreen || isLaptop || isTabletDevice ? fontSize = 100 : fontSize = 25;

  return (
    <div className="wrapper">
      <Router>
        <NavigationBar />
        <br />
        <br />
        <Routes>
          <Route path='/' element={<Home fontSize={fontSize} />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </Router>
   </div>
  );
}

export default App;
