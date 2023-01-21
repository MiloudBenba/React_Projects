import React, { useState } from "react";
import "./Slider.css";
import dataSlider from "./dataSlider";
import BtnSlider from "./BtnSlider";

// useState Hook intiated
const Slider = () => {
  const [slideAnim, setSlideAnim] = useState({
    index: 1,
    inProgress: false,
  });

  // Function for button NEXT
  const nextSlide = () => {
    if (slideAnim.index !== dataSlider.length) {
      setSlideAnim({ index: slideAnim.index + 1, inProgress: true });
    } else if (slideAnim.index === dataSlider.length) {
      setSlideAnim({ index: 1, inProgress: true });
    }
  };

  // Function for button PREV
  const prevSlide = () => {
    if (slideAnim.index !== 1) {
      setSlideAnim({ index: slideAnim.index - 1, inProgress: true });
    } else if (slideAnim.index === 1) {
      setSlideAnim({ index: dataSlider.length, inProgress: true });
    }
  };

  //  Return, render section
  return (
    <div className="container-slider">
      {dataSlider.map((obj, index) => {
        return (
          <div
            key={obj.id}
            className={
              slideAnim.index === index + 1 ? "slide active-anim" : "slide"
            }
          >
            <img src={`Imgs/img${index + 1}.jpg`} alt="images" />
          </div>
        );
      })}

      {/* 
      component BtnSlider called with states and props. 
       */}
      <BtnSlider moveSlide={nextSlide} direction={"next"} />
      <BtnSlider moveSlide={prevSlide} direction={"prev"} />

      {/* Map of data array to highlight the dot according to index position
       */}

      <div className="container-dots">
        {Array.from({ length: dataSlider.length }).map((item, index) => {
          return (
            <div
              className={slideAnim.index === index + 1 ? "dot active" : "dot"}
            ></div>
          );
        })}
      </div>
    </div>
  );
};

export default Slider;
