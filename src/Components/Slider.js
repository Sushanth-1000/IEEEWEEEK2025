import React, { useState } from 'react';
import '../pages/Slider.css';

const Slider = (props) => {
  const [activeSlide, setActiveSlide] = useState(props.activeSlide || 0);

  if (!props.data || !Array.isArray(props.data) || props.data.length === 0) {
    return <div>Loading events...</div>;
  }

  const handleSlideClick = (index) => {
    setActiveSlide(index);
  };

  const next = () =>
    activeSlide < props.data.length - 1 && setActiveSlide(activeSlide + 1);

  const prev = () => activeSlide > 0 && setActiveSlide(activeSlide - 1);

  const getStyles = (index) => {
    if (activeSlide === index) {
  return {
    opacity: 1,
    transform: "translateX(0px) translateZ(0px) rotateY(0deg)",
    zIndex: 10,
    boxShadow: "0 0 30px rgba(0, 240, 255, 0.4)", // THE NEON GLOW
    border: "1px solid #00f0ff", // THE NEON BORDER
    filter: "grayscale(0%)" // Color only on active
  };
}
    else if (activeSlide - 1 === index) {
      return {
        opacity: 1,
        transform: "translateX(-240px) translateZ(-300px) rotateY(30deg)",
        zIndex: 9
      };
    } 
    else if (activeSlide + 1 === index) {
      return {
        opacity: 1,
        transform: "translateX(240px) translateZ(-300px) rotateY(-30deg)",
        zIndex: 9
      };
    } 
    else if (activeSlide - 2 === index) {
      return {
        opacity: 1,
        transform: "translateX(-480px) translateZ(-400px) rotateY(45deg)",
        zIndex: 8
      };
    } 
    else if (activeSlide + 2 === index) {
      return {
        opacity: 1,
        transform: "translateX(480px) translateZ(-400px) rotateY(-45deg)",
        zIndex: 8
      };
    } 
    else if (activeSlide - 3 === index) {
      return {
        opacity: 1,
        transform: "translateX(-720px) translateZ(-500px) rotateY(60deg)",
        zIndex: 7
      };
    } 
    else if (activeSlide + 3 === index) {
      return {
        opacity: 1,
        transform: "translateX(720px) translateZ(-500px) rotateY(-60deg)",
        zIndex: 7
      };
    } 
    else if (index < activeSlide - 3) {
      return {
        opacity: 1,
        transform: "translateX(-960px) translateZ(-600px) rotateY(75deg)",
        zIndex: 6
      };
    } 
    else if (index > activeSlide + 3) {
      return {
        opacity: 1,
        transform: "translateX(960px) translateZ(-600px) rotateY(-75deg)",
        zIndex: 6
      };
    }
    return {
      opacity: 0,
      transform: "translateX(0) translateZ(0) rotateY(0)",
      zIndex: 0
    };
  };

  return (
    <div className="slideC">
      {props.data.map((item, i) => (  
        <React.Fragment key={item.id || i}>
          <div
            className="slide"
            style={getStyles(i)}
            onClick={() => handleSlideClick(i)}
          >
            <img 
              src={item.image} 
              alt={item.title || 'Event image'}
              className="slider-image"
            />
          </div>
        </React.Fragment>
      ))}
    </div>
  );
};

export default Slider;