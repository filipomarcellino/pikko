import axios from "axios";
import Image from "next/image";
import { useState } from "react";

const Index = ({ orders, products }) => {
  const [saladList, setSaladList] = useState(products);
  const [orderList, setOrderList] = useState(orders);
  const status = ["preparing", "on the way", "delivered"];

  const handleDelete = async (id) => {
    try {
      const res = await axios.delete(
        `http://localhost:3000/api/products/${id}`
      );
      setSaladList(saladList.filter((pizza) => pizza._id !== id));
    } catch (err) {
      console.log(err);
    }
  };

  const handleStatus = async (id) => {
    const item = orderList.filter((order) => order._id === id)[0];
    const currentStatus = item.status;

    try {
      const res = await axios.put(`http://localhost:3000/api/orders/${id}`, {
        status: currentStatus + 1
      });
      setOrderList([
        res.data,
        ...orderList.filter((order) => order._id !== id)
      ]);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="p-12 flex flex-wrap justify-around">
      <div>
        <h1 className="text-2xl font-semibold">Products</h1>
        <table className="p-2 border border-black text-center w-full border-separate border-spacing-x-8">
          <tbody>
            <tr>
              <th>Image</th>
              <th>Id</th>
              <th>Title</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </tbody>
          <tbody>
            {saladList.map((product) => (
              <tr key={product._id}>
                <td>
                  <Image src={product.img} width={70} height={70} alt="" />
                </td>
                <td>{product._id.slice(0, 5)}...</td>
                <td>{product.title}</td>
                <td>${product.prices[0]}</td>
                <td>
                  <button className="mr-1 cursor-pointer duration-150 bg-green-600 text-white px-1.5 py-1">
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(product._id)}
                    className="cursor-pointer duration-150 bg-red-600 text-white px-1.5 py-1"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div>
        <h1 className="text-2xl font-semibold">Orders</h1>
        <table className="p-2 border border-black text-center w-full border-separate border-spacing-x-8 border-spacing-y-2">
          <tbody>
            <tr>
              <th>Id</th>
              <th>Customer</th>
              <th>Total</th>
              <th>Payment</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </tbody>

          {orderList.map((order) => (
            <tbody key={order._id}>
              <tr>
                <td>{order._id.slice(0, 5)}...</td>
                <td>{order.customer}</td>
                <td>${order.total}</td>
                <td>
                  {order.method === 0 ? <span>cash</span> : <span>paid</span>}
                </td>
                <td>{status[order.status]}</td>
                <td>
                  <button
                    onClick={() => handleStatus(order._id)}
                    className="mr-1 cursor-pointer duration-150 bg-green-600 text-white px-1.5 py-1"
                  >
                    Next Stage
                  </button>
                </td>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
    </div>
  );
};

export const getServerSideProps = async () => {
  const productRes = await axios.get("http://localhost:3000/api/products");
  const orderRes = await axios.get("http://localhost:3000/api/orders");

  return {
    props: {
      orders: orderRes.data,
      products: productRes.data
    }
  };
};

export default Index;
