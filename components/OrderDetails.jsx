import { useState } from "react";
const OrderDetails = ({ total, createOrder }) => {
  const [customer, setCustomer] = useState("");
  const [address, setAddress] = useState("");
  const handleClick = () => {
    createOrder({ customer, address, total, method: 0 });
  };
  return (
    <div className="h-screen z-[999] w-full fixed left-0 top-0 flex justify-center items-center bg-black bg-opacity-50">
      <div className="p-5 bg-white rounded shadow-lg">
        <h1 className="font-semibold text-xl mb-5 border-b border-black">
          You will pay ${total} after delivery.
        </h1>
        <div>
          <label>Full name</label>
          <br></br>
          <input
            className="p-1 w-full border border-black mb-3"
            placeholder="John Doe"
            type="text"
            onChange={(e) => setCustomer(e.target.value)}
          />
        </div>
        <div>
          <label>Phone Number</label> <br></br>
          <input
            className="p-1 w-full border border-black mb-3"
            type="text"
            placeholder="+1 234 567 89"
          />
        </div>
        <div>
          <label>Address</label> <br></br>
          <textarea
            className="p-1 border border-black w-full"
            rows={5}
            placeholder="Elton St. 505 NY"
            type="text"
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>
        <button className="w-full cursor-pointer duration-150 bg-black text-white px-2 py-1" onClick={handleClick}>Order</button>
      </div>
    </div>
  );
};

export default OrderDetails;
