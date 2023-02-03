import React from "react";
import Link from "next/link";

const BowlCard = ({ bowl }) => {
  return (
    <div>
      <Link href={`/product/${bowl._id}`} passHref>
        <img
          src={bowl.img}
          alt=""
          className="hover:scale-125 duration-150 max-h-52 text-center mx-auto"
        />
      </Link>

      <h1 className="text-center"> {bowl.title} </h1>
      <h1 className="text-center"> {bowl.prices[0]} </h1>
      <p className="text-center">{bowl.desc}</p>
    </div>
  );
};

export default BowlCard;
