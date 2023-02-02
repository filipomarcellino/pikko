import React from "react";

const BowlCard = () => {
  return (
    <div>
      <img
        src="/img/salad.png"
        alt=""
        className="hover:scale-125 duration-150 max-h-52 text-center mx-auto"
      />
      <h1 className="text-center"> MEDITERRANEAN </h1>
      <h1 className="text-center"> $13.99 </h1>
      <p className="text-center">
        {" "}
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam amet
        ratione cum incidunt, commodi eaque ullam repellat eligendi expedita
        maiores aliquid ab dolore praesentium laborum enim quam blanditiis
        labore! Similique.
      </p>
    </div>
  );
};

export default BowlCard;
