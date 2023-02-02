import React from "react";
import { useState } from "react";

const Product = () => {
  const [size, setSize] = useState(0);
  const salad = {
    id: 1,
    img: "/img/salad.png",
    name: "Mediterranean Bowl",
    price: [13.9, 17.9],
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum natus consequatur cumque itaque quam ducimus et minus nisi commodi deleniti. Eligendi at earum ipsa vero aliquam sunt, tempore quisquam consequuntur!"
  };
  return (
    <div className="flex items-center justify-between">
      <div className="shrink-0">
        <img src={salad.img} alt="" className="text-center mx-auto h-5/6" />
      </div>
      <div className="">
        <h1 className="text-3xl mb-6">{salad.name}</h1>
        <span className="text-xl text-red-600 underline underline-offset-4">
          ${salad.price[size]}
        </span>
        <p className="mt-4">{salad.desc}</p>
        <h3 className="text-xl font-semibold mt-4">Choose the size</h3>
        <div className="mt-4 flex gap-5">
          <div className="hover:scale-125 duration-150 flex flex-col items-center" onClick={()=>setSize(0)}>
            <span className="italic py-1 px-2 rounded-lg bg-lime-300	mb-2">
              regular
            </span>
            <img className="h-7" src="/img/bowl.png" />
          </div>
          <div className="hover:scale-125 duration-150 flex flex-col items-center" onClick={()=>setSize(1)}>
            <span className="italic py-1 px-2 rounded-lg bg-lime-300	mb-2">
              large
            </span>
            <img className="h-11" src="/img/bowl.png" />
          </div>
        </div>
        <h3 className="text-xl font-semibold mt-4">
          Add additional ingredients
        </h3>
        <div className="flex flex-col gap-3 mt-2">
          <div>
            <input type="checkbox" name="dressing" id="dressing" />
            <label className="ml-2" htmlFor="dressing">House dressing <span className="italic py-1 px-2 rounded-lg bg-lime-300">(free)</span></label>
          </div>
          <div>
            <input type="checkbox" name="egg" id="egg" />
            <label className="ml-2" htmlFor="egg">Two hard boiled eggs <span className="italic py-1 px-2 rounded-lg bg-lime-300">(+2.99)</span></label>
          </div>
          <div>
            <input type="checkbox" name="chicken" id="chicken" />
            <label className="ml-2" htmlFor="chicken">Extra chicken <span className="italic py-1 px-2 rounded-lg bg-lime-300">(+3.79)</span></label>
          </div>
          <div>
            <input type="checkbox" name="steak" id="steak" />
            <label className="ml-2" htmlFor="steak">Extra steak <span className="italic py-1 px-2 rounded-lg bg-lime-300">(+3.99)</span></label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
