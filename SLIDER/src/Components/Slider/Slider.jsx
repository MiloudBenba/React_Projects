import React, { useState } from "react";
import "./Slider.css";
import dataSlider from "./dataSlider";
import BtnSlider from "./BtnSlider";

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
      <BtnSlider moveSlide={nextSlide} direction={"next"} />
      <BtnSlider moveSlide={prevSlide} direction={"prev"} />
    </div>
  );
};

export default Slider;
