import React from "react";

const order = () => {
  const status = 0
  const statusClass = (index) => {
    if(index-status < 1) return ""
    if(index-status === 1) return "animate-pulse"
    if(index-status > 1) return "opacity-30"
  }

  const checkedStatus = (index) => {
    if(index-status < 1) return "h-10"
    if(index-status === 1) return "hidden"
    if(index-status > 1) return "hidden"
  }

  return (
    <div className="h-[60vh] gap-x-5 flex flex-wrap p-10 justify-evenly content-around">
      <div>
        <table className="text-center w-full border-separate border-spacing-y-2 border-spacing-x-12 border">
          <tbody>
            <tr>
              <th>Order ID</th>
              <th>Customer</th>
              <th>Address</th>
              <th>Total</th>
            </tr>
            <tr>
              <td>234523452345</td>
              <td>Jane Doe</td>
              <td>1402-55 tenth street</td>
              <td>$17.9</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="flex gap-x-12">
        <div className={statusClass(0)}>
          <img className="h-14" src="/img/paid.png" />
          <span>Payment</span>
          <div>
            <img className={checkedStatus(0)} src="/img/checked.png"/>
          </div>
        </div>
        <div className={statusClass(1)}>
          <img className="h-14" src="/img/bake.png" />
          <span>Preparing</span>
          <div>
            <img className={checkedStatus(1)} src="/img/checked.png"/>
          </div>
        </div>
        <div className={statusClass(2)}>
          <img className="h-14" src="/img/bike.png" />
          <span>On the Way</span>
          <div>
            <img className={checkedStatus(2)} src="/img/checked.png"/>
          </div>
        </div>
        <div className={statusClass(3)}>
          <img className="h-14" src="/img/delivered.png" />
          <span>Delivered</span>
          <div>
            <img className={checkedStatus(3)} src="/img/checked.png"/>
          </div>
        </div>
        
      </div>
      <div>
        <div className="hover:scale-110 duration-150 p-7 rounded-lg bg-lime-900 text-white">
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
            disabled
            className="cursor-not-allowed w-60 duration-150 bg-white text-lime-600 px-2 py-1"
            type="button"
            value="PAID"
          />
        </div>
      </div>
    </div>
  );
};

export default order;
