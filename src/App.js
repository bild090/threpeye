import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';


import Navbar from './header/Navbar';
import AboutUs from './Content/AboutUs';
import Vision from './Content/Vision';
import Goals from './Content/Goals';
import Wisdom from './Content/Wisdom';
import Services from './Content/Services';
import Clients from './Content/Clients';
import Footer from './footer/Footer';

function App() {

  return (
    <Router>
      <div className="App">
      <Navbar />
        <div id="aboutUs">
        <AboutUs />
        </div>
        <div id="vision">
        <Vision />
        </div>
        <div id="goals">
        <Goals />
        </div>
        <div id="wisdom">
        <Wisdom />
        </div>
        <div id="services">
        <Services />
        </div>
        <div id="clients">
        <Clients />
        </div>
        <div id="contact">
        <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
