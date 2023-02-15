import React from "react";
import Link from "next/link";
import Image from "next/image";

const BowlCard = ({ bowl }) => {
  return (
    <div className="bg-white hover:scale-105 border-4 border-lime-900 h-auto rounded duration-300 p-4">
      <Link href={`/product/${bowl._id}`} passHref>
        <h1 className="text-center text-xl font-semibold italic">
          {" "}
          {bowl.title}{" "}
        </h1>

        <img
          src={bowl.img}
          alt=""
          className=" duration-300 max-h-52 text-center mx-auto"
        />

        <h1 className="text-red-500 mb-2 text-center underline underline-offset-4 un">
          {" "}
          ${bowl.prices[0]}{" "}
        </h1>
        <p className="text-center">{bowl.desc}</p>
      </Link>
    </div>
  );
};

export default BowlCard;
