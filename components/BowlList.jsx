import React from "react";
import BowlCard from "./BowlCard";

const BowlList = ({ bowlList }) => {
  return (
    <div className="p-12 grid gap-4 grid-cols-3 grid-rows-3 place-content-center">
      {bowlList.map((bowl) => (
        <BowlCard key={bowl._id} bowl={bowl} />
      ))}
    </div>
  );
};

export default BowlList;
