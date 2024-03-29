import React, { useEffect, useRef, useState } from "react";
import { data } from "../../../../assets/dataImgSlide.js";
import "./slider.scss";
import Button from "../../../atoms/button/Button.jsx";
import { MdOutlineHorizontalRule } from "react-icons/md";

function Slider() {
  const listRef = useRef();
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const listNode = listRef.current;
    const itemWidth = listNode.clientWidth;

    listNode.style.transition = "transform 0.5s ease-in-out";
    listNode.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
  }, [currentIndex]);

  const scrollToImage = (direction) => {
    if (direction === "prev") {
      setCurrentIndex((curr) => {
        const isFirstSlide = curr === 0;
        return isFirstSlide ? data.length - 1 : curr - 1;
      });
    } else {
      setCurrentIndex((curr) => (curr + 1) % data.length);
    }
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div className="main-container">
      <div className="slider-container">
        <p className="text-slider">
          Descubre <span>el mundo del desarrollo web con </span>nuestros
          programas educativos.
        </p>
        <a href="/programas">
          <Button className="button-slider">¡Explora Programas!</Button>
        </a>
        <div className="rightArrow" onClick={() => scrollToImage("next")}>
          &#10093;
        </div>
        <div className="container-images">
          <ul ref={listRef}>
            {data.map((item) => {
              return (
                <li key={item.id}>
                  <img src={item.imgUrl} width={500} height={280} />
                </li>
              );
            })}
          </ul>
          <div className="shape-slider"></div>
        </div>
        <div className="dots-container">
          {data.map((_, idx) => (
            <div
              key={idx}
              className={`dot-container-item ${
                idx === currentIndex ? "active" : ""
              }`}
              onClick={() => goToSlide(idx)}
            >
              <MdOutlineHorizontalRule />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Slider;
