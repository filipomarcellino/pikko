import React from "react";
import BowlCard from "./BowlCard";

const BowlList = ({ bowlList }) => {
  return (
    <div style={{backgroundImage: "repeating-radial-gradient(circle at 0 0,transparent 0,#ffffff60 14px),repeating-linear-gradient(#ffffff55,#d4d4d457);"}} className="p-20 grid gap-20 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 place-content-center">
      {bowlList.map((bowl) => (
        <BowlCard key={bowl._id} bowl={bowl} />
      ))}
    </div>
  );
};

export default BowlList;
