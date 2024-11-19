"use client";

import React, { useEffect, useRef } from "react";
import "@/styles/slider.css";

const Slide: React.FC = () => {
  const parentRef = useRef<HTMLDivElement | null>(null);

  const changeChild = () => {
    if (parentRef.current) {
      const firstChild = parentRef.current.children[0] as HTMLDivElement;
      firstChild.classList.add("sliderAni");

      setTimeout(() => {
        firstChild.classList.remove("sliderAni");
        parentRef.current?.appendChild(firstChild);
      }, 500);
    }
  };

  useEffect(() => {
    const interval = setInterval(changeChild, 6000);

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="slider-container" ref={parentRef} id="parent-class">
      <div className="slider">
        <img className="w-full" src="slider-banner-1.webp" alt="slider-1" />
      </div>
      <div className="slider">
        <img className="w-full" src="slider-banner-4.webp" alt="slider-2" />
      </div>
      <div className="slider">
        <img className="w-full" src="slider-banner-3.webp" alt="slider-3" />
      </div>
      <div className="slider">
        <img className="w-full" src="slider-banner-2.webp" alt="slider-4" />
      </div>
    </div>
  );
};

export default Slide;
