import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import Projects from './pages/projects';

import reportWebVitals from './reportWebVitals';
import MyNavbar from './components/MyNavbar';
import SobreMim from './pages/SobreMim';

import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

import AOS from 'aos';
import 'aos/dist/aos.css';
  
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <MyNavbar/>
    

    <Router>
      <div>
        {/* Links ou navegação */}
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/projects" element={<Projects/>} />
          <Route path="/SobreMim" element={<SobreMim/>} />
        </Routes>
      </div>
    </Router>
    
  </React.StrictMode>
);
AOS.init({
  // Global settings:
  disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
  startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
  initClassName: 'aos-init', // class applied after initialization
  animatedClassName: 'aos-animate', // class applied on animation
  useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
  disableMutationObserver: false, // disables automatic mutations' detections (advanced)
  debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
  throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
  
  
  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 120, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 1000, // values from 0 to 3000, with step 50ms
  easing: 'ease', // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: 'top-bottom'
  });
reportWebVitals();
