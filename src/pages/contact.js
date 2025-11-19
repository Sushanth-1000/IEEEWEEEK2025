import React, { useEffect, useRef, useState } from 'react';
import Navbaring from "../Components/Nav";  // Changed from '../Components/Navbar'
import Footer from "../Components/Foot";    // Changed from '../Components/Footer'
import './contact.css';

const ContactUs = () => {
  const [vantaEffect, setVantaEffect] = useState(null);
  const vantaRef = useRef(null);

  useEffect(() => {
    if (!vantaEffect) {
      const effect = window.VANTA.BIRDS({
        el: vantaRef.current,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.00,
        minWidth: 200.00,
        scale: 1.00,
        scaleMobile: 1.00,
        birdSize: 1.20,
        wingSpan: 15.00,
        speedLimit: 2.00,
        separation: 100.00,
        quantity: 4.00,
        backgroundColor: 0x0,
        color1: 0x236e65,
        color2: 0x7ecd73,
        colorMode: "lerp"
      });
      setVantaEffect(effect);
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  return (
    <div className="contact-page">
      <div ref={vantaRef} className="birds"></div>
      <Navbaring />
      <div className="contact-container">
        <div className="contact-card">
          <h1 className="contact-title">Contact Us</h1>
          
          <div className="direct-contact">
            <h3>Get In Touch</h3>
            <div className="contact-person">
              <div className="contact-name">Uday Ramageri</div>
              <a href="tel:74839 39765" className="contact-number">+91 99888 49494</a>
            </div>
            <div className="contact-person">
              <div className="contact-name">Ninaada Ranga</div>
              <a href="tel:99860 23708" className="contact-number">+91 94985 84940</a>
            </div>
            <div className="contact-email">
              <span>Email us at: </span>
              <a href="mailto:ieee@pes.edu">ieee.sb@bmsce.ac.in</a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ContactUs;


