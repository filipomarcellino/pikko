import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
  PayPalScriptProvider,
  PayPalButtons,
  usePayPalScriptReducer
} from "@paypal/react-paypal-js";
import axios from "axios";
import { useRouter } from "next/router";
import { reset } from "@/redux/cartSlice";
import OrderDetails from "@/components/OrderDetails";

const Cart = () => {
  // This values are the props in the UI
  const cart = useSelector((state) => state.cart);
  const [open, setOpen] = useState(false);
  const [cash, setCash] = useState(false);

  const amount = cart.total;
  const currency = "CAD";
  const style = { layout: "vertical" };
  const dispatch = useDispatch();
  const router = useRouter();

  const createOrder = async (data) => {
    try {
      const res = await axios.post("http://localhost:3000/api/orders", data);
      console.log(res.promise);
      if (res.status === 201) {
        dispatch(reset());
        router.push(`/orders/${res.data._id}`);
      }
    } catch (err) {
      console.log(err);
    }
  };

  // Custom component to wrap the PayPalButtons and handle currency changes
  const ButtonWrapper = ({ currency, showSpinner }) => {
    // usePayPalScriptReducer can be use only inside children of PayPalScriptProviders
    // This is the main reason to wrap the PayPalButtons in a new component
    const [{ options, isPending }, dispatch] = usePayPalScriptReducer();

    useEffect(() => {
      dispatch({
        type: "resetOptions",
        value: {
          ...options,
          currency: currency
        }
      });
    }, [currency, showSpinner]);

    return (
      <>
        {showSpinner && isPending && <div className="spinner" />}
        <PayPalButtons
          style={style}
          disabled={false}
          forceReRender={[amount, currency, style]}
          fundingSource={undefined}
          createOrder={(data, actions) => {
            return actions.order
              .create({
                purchase_units: [
                  {
                    amount: {
                      currency_code: currency,
                      value: amount
                    }
                  }
                ]
              })
              .then((orderId) => {
                // Your code here after create the order
                return orderId;
              });
          }}
          onApprove={function (data, actions) {
            return actions.order.capture().then(function (details) {
              const shipping = details.purchase_units[0].shipping;
              createOrder({
                customer: shipping.name.full_name,
                address: shipping.address.address_line_1,
                total: cart.total,
                method: 1
              });
            });
          }}
        />
      </>
    );
  };
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
          {cart.products.map((product) => (
            <tr key={product._id}>
              <td>
                <div>
                  <img className="mx-auto h-32" src={product.img} />
                </div>
              </td>
              <td>{product.title}</td>
              <td>
                {product.extras.map((extra) => (
                  <span key={extra._id}>{extra.text}</span>
                ))}
              </td>
              <td>${product.price}</td>
              <td>{product.quantity}</td>
              <td>${product.price * product.quantity}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className=" p-7 rounded-lg mx-auto mt-10 bg-lime-900 text-white">
        <h2 className="font-semibold text-xl pb-2">Cart Total</h2>
        <p>
          <span className="font-semibold">Subtotal: </span>
          {cart.total}
        </p>
        <p>
          <span className="font-semibold">Discount: </span>$0
        </p>
        <p className="mb-5">
          <span className="font-semibold">Total: </span>
          {cart.total}
        </p>
        {open ? (
          <div>
            <input
              className="mb-2 w-60 cursor-pointer duration-150 bg-white text-lime-900 px-2 py-1"
              type="button"
              value="Cash On Delivery"
              onClick={() => setCash(true)}
            />
            <PayPalScriptProvider
              options={{
                "client-id":
                  "ASWtzTWFTPB3r9Wrhr8OKWK9RPI4Z4WlZGcc_aS0M0eOHVLVi94hFQuYes0hWJnoQfD_c8oZ_yEuDjGZ",
                components: "buttons",
                currency: "USD",
                "disable-funding": "credit,card,p24"
              }}
            >
              <ButtonWrapper currency={currency} showSpinner={false} />
            </PayPalScriptProvider>
          </div>
        ) : (
          <input
            className="w-60 cursor-pointer duration-150 bg-white text-lime-900 px-2 py-1"
            type="button"
            value="Checkout Now!"
            onClick={() => setOpen(true)}
          />
        )}
      </div>
      {cash && <OrderDetails total={cart.total} createOrder={createOrder} />}
    </div>
  );
};

export default Cart;
