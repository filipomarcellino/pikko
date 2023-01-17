import React from "react";
import BowlCard from "./BowlCard";

const BowlList = () => {
  return (
    <div className="p-12 grid gap-4 grid-cols-3 grid-rows-3 place-content-center">
      <BowlCard />
      <BowlCard />
      <BowlCard />
      <BowlCard />
      <BowlCard />
      <BowlCard />
      <BowlCard />
      <BowlCard />
      <BowlCard />
    </div>
  );
};

export default BowlList;
