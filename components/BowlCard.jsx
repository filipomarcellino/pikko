import React from "react";
import Link from "next/link";
import Image from "next/image";

const BowlCard = ({ bowl }) => {
  return (
    <Link href={`/product/${bowl._id}`} passHref>
      <div className="hover:shadow-2xl duration-300 p-4">
        <img src={bowl.img} alt="" className="hover:scale-105 duration-300 max-h-52 text-center mx-auto" />

        <h1 className="text-center"> {bowl.title} </h1>
        <h1 className="text-center"> {bowl.prices[0]} </h1>
        <p className="text-center">{bowl.desc}</p>
      </div>
    </Link>
  );
};

export default BowlCard;
