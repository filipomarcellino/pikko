import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="h-auto bg-lime-800 flex justify-between items-start">
      <div className="basis-96 flex-none self-start">
        <img
          src="/img/background.png"
          alt=""
        />
      </div>
      <div className="pt-14 pl-10 pr-10 hidden sm:block">
        <h2 className="tracking-wider text-3xl text-orange-200">
          Just for the health of it!
        </h2>
      </div>
      <div className="pt-14 pr-10 shrink-0 hidden md:block">
        <h1 className="text-lg text-orange-200">FIND OUR RESTAURANTS</h1>
        <p className="text-gray-200 pt-4">
          1654 R. Don Road #304.
          <br /> NewYork, 85022
          <br /> (602) 867-1010
        </p>
        <p className="text-gray-200 pt-2">
          2356 K. Laquie Rd #235.
          <br /> NewYork, 85022
          <br /> (602) 867-1011
        </p>
        <p className="text-gray-200 pt-2">
          1614 E. Erwin St #104.
          <br /> NewYork, 85022
          <br /> (602) 867-1012
        </p>
        <p className="text-gray-200 pt-2">
          1614 W. Caroll St #125.
          <br /> NewYork, 85022
          <br /> (602) 867-1013
        </p>
      </div>
      <div className="pt-14 pr-20 hidden lg:block">
        <h1 className="text-lg text-orange-200">WORKING HOURS</h1>
        <p className="text-gray-200 pt-4">
          MONDAY UNTIL FRIDAY
          <br /> 9:00 – 22:00
        </p>
        <p className="text-gray-200 pt-2">
          SATURDAY - SUNDAY
          <br /> 12:00 – 24:00
        </p>
      </div>
    </div>
  );
};

export default Footer;
