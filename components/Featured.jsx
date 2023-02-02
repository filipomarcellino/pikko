import React, { useState } from "react";

const Featured = () => {
  const images = [
    "/img/featured.png",
    "/img/featured2.png",
    "/img/featured3.jpg"
  ];
  const [currentIndex, setCurrentIndex] = useState(0);
  const prevSlide = () => {
    currentIndex === 0
      ? setCurrentIndex(images.length - 1)
      : setCurrentIndex(currentIndex - 1);
  };
  const nextSlide = () => {
    currentIndex === images.length - 1
      ? setCurrentIndex(0)
      : setCurrentIndex(currentIndex + 1);
  };
  return (
    <div className="drop-shadow-lg">
      <div className="h-auto bg-lime-500 transition ease-in-out duration-500">
        <img
          className="border-x-2 h-fit mx-auto "
          src={images[currentIndex]}
          alt=""
        />
      </div>
      <img
        src="/img/arrowl.png"
        alt=""
        className="hover:scale-110 duration-150 h-10 absolute top-[50%] -translate-x-0 translate-y-[50%] left-5 rounded-full p-1 bg-black cursor-pointer"
        onClick={prevSlide}
      />
      <img
        src="/img/arrowr.png"
        alt=""
        className="hover:scale-110 duration-150 h-10 absolute top-[50%] -translate-x-0 translate-y-[50%] right-5 rounded-full p-1 bg-black cursor-pointer"
        onClick={nextSlide}
      />
    </div>
  );
};

export default Featured;
