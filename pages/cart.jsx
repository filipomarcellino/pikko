import React from "react";

const Cart = () => {
  return (
    <div className=" p-12 flex flex-col">
      <table className="text-center w-full border-separate border-spacing-2 border border-slate-500">
        <tbody>
          <tr>
            <th className="border border-slate-500">Product</th>
            <th className="border border-slate-500">Name</th>
            <th className="border border-slate-500">Extras</th>
            <th className="border border-slate-500">Price</th>
            <th className="border border-slate-500">Quantity</th>
            <th className="border border-slate-500">Total</th>
          </tr>
          <tr>
            <td>
              <div>
                <img className="mx-auto h-32" src="/img/salad.png" />
              </div>
            </td>
            <td>Name</td>
            <td>Dressing</td>
            <td>$17.9</td>
            <td>1</td>
            <td>$17.9</td>
          </tr>
        </tbody>
      </table>
      <div className="hover:scale-110 duration-150 p-7 rounded-lg mx-auto mt-10 bg-lime-900 text-white">
        <h2 className="font-semibold text-xl pb-2">Cart Total</h2>
        <p>
          <span className="font-semibold">Subtotal: </span>$79.9
        </p>
        <p>
          <span className="font-semibold">Discount: </span>$0
        </p>
        <p className="mb-5">
          <span className="font-semibold">Total: </span>$79.9
        </p>
        <input
          className="w-60 cursor-pointer duration-150 bg-white text-lime-900 px-2 py-1"
          type="button"
          value="Checkout Now!"
        />
      </div>
    </div>
  );
};

export default Cart;
