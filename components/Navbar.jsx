import React from "react";
import Image from "next/image";
import { useSelector } from "react-redux";
import Link from "next/link";

const Navbar = () => {
  const quantity = useSelector((state) => state.cart.quantity);
  return (
    <>
      <header className="bg-lime-500 text-black shadow-lg md:block sticky top-0 z-50">
        <div className="container mx-auto flex items-center h-24 ">
          <a href="">
            <img className="pl-10 md:pl-0 h-20 " src="/img/logo.png" alt="" />
          </a>
          <nav className="contents font-semibold text-base lg:text-lg">
            <ul className="mx-auto flex items-center hidden md:flex">
              <li className="p-5 xl:p-8 hover:text-white">
                <a href="">
                  <span>Home</span>
                </a>
              </li>
              <li className="p-5 xl:p-8 hover:text-white">
                <a href="">
                  <span>Products</span>
                </a>
              </li>
              <li className="p-5 xl:p-8 hover:text-white">
                <a href="">
                  <span>Menu</span>
                </a>
              </li>
              <li className="p-5 xl:p-8 hover:text-white">
                <a href="">
                  <span>Events</span>
                </a>
              </li>
              <li className="p-5 xl:p-8 hover:text-white">
                <a href="">
                  <span>Blog</span>
                </a>
              </li>
            </ul>
          </nav>
          <Link href="/cart" passHref>
            <div className="relative">
              <img
                src="/img/cart.png"
                alt="test"
                className="h-10 hidden md:flex"
              />
              <div className="font-bold absolute top-[-10px] right-[-9px] text-sm px-2 py-0.5 text-lime-600 rounded-full bg-white">
                {quantity}
              </div>
            </div>
          </Link>
        </div>
      </header>
    </>
  );
};

export default Navbar;
