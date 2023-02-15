import React from "react";
import BowlCard from "./BowlCard";

const BowlList = ({ bowlList }) => {
  return (
    <div className="p-12 grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-content-center">
      {bowlList.map((bowl) => (
        <BowlCard key={bowl._id} bowl={bowl} />
      ))}
    </div>
  );
};

export default BowlList;
