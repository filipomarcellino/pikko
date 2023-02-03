import React from "react";
import { useState } from "react";
import axios from "axios";

const Product = ({ bowl }) => {
  const [price, setPrice] = useState(bowl.prices[0]);
  const [size, setSize] = useState(0);
  const [extras, setExtras] = useState([]);
  const [quantity, setQuantity] = useState(1)

  const changePrice = (number) => {
    setPrice(price + number);
  };

  const handleSize = (sizeIndex) => {
    const difference = bowl.prices[sizeIndex] - bowl.prices[size];
    setSize(sizeIndex);
    changePrice(difference);
  };

  const handleChange = (e, option) => {
    const checked = e.target.checked;
    if (checked) {
      changePrice(option.price);
      setExtras((prev) => [...prev, option]);
    } else {
      changePrice(-option.price);
      setExtras(extras.filter((extra) => extra._id !== option._id));
    }
  };
  console.log(extras)

  return (
    <div className="flex flex-wrap items-center justify-evenly p-12">
      <div className="">
        <img src={bowl.img} alt="" className="text-center mx-auto h-5/6" />
      </div>
      <div className="max-w-md">
        <h1 className="text-3xl mb-6">{bowl.title}</h1>
        <span className="text-xl text-red-600 underline underline-offset-4">
          ${price}
        </span>
        <p className="mt-4">{bowl.desc}</p>
        <h3 className="text-xl font-semibold mt-4">Choose the size</h3>
        <div className="mt-4 flex gap-5">
          <div
            className="cursor-pointer hover:scale-125 duration-150 flex flex-col items-center"
            onClick={() => handleSize(0)}
          >
            <span className="italic py-1 px-2 rounded-lg bg-lime-300	mb-2">
              regular
            </span>
            <img className="h-7" src="/img/bowl.png" />
          </div>
          <div
            className="cursor-pointer hover:scale-125 duration-150 flex flex-col items-center"
            onClick={() => handleSize(1)}
          >
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
          {bowl.extraOption.map((option) => (
            <div key={option._id}>
              <input
                type="checkbox"
                name={option.text}
                id={option.text}
                onChange={(e) => handleChange(e, option)}
              />
              <label className="ml-2" htmlFor="dressing">
                House dressing{" "}
                <span className="italic py-1 px-2 rounded-lg bg-lime-300">
                  +${option.price}
                </span>
              </label>
            </div>
          ))}
        </div>
        <div className="mt-4">
          <input
            onChange={(e) => setQuantity(e.target.value)}
            className="rounded-sm border border-black w-10 text-center"
            type="number"
            id="quantity"
            name="quantity"
            defaultValue={1}
          />
          <input
            className="text-lg font-semibold h-10 cursor-pointer hover:scale-110 duration-150 rounded-md px-2 bg-lime-300 ml-5"
            type="button"
            value="Add to Cart"
          />
        </div>
      </div>
    </div>
  );
};

export const getServerSideProps = async ({ params }) => {
  const res = await axios.get(
    `http://localhost:3000/api/products/${params.id}`
  );
  return {
    props: {
      bowl: res.data
    }
  };
};

export default Product;
