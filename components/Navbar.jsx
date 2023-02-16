import React from "react";
import Image from "next/image";
import { useSelector } from "react-redux";
import Link from "next/link";

const Navbar = () => {
  const quantity = useSelector((state) => state.cart.quantity);
  return (
    // <>
    //   <header className="bg-lime-500 text-black shadow-lg md:block sticky top-0 z-50">
    //     <div className="container mx-auto flex items-center h-24 ">
    //       <Link href="/" passHref>
    //         <img className="pl-10 md:pl-0 h-20 " src="/img/logo.png" alt="" />
    //       </Link>
    //       <nav className="contents font-semibold text-base lg:text-lg">
    // <ul className="mx-auto flex items-center hidden md:flex">
    //   <li className="p-5 xl:p-8 hover:text-white">
    //     <Link href="/" passHref>
    //       <span>Homepage</span>
    //     </Link>
    //   </li>
    //   <li className="p-5 xl:p-8 hover:text-white">
    //     <Link href="/menu" passHref>
    //       <span>Menu</span>
    //     </Link>
    //   </li>
    // </ul>
    //       </nav>
    //       <Link href="/cart" passHref>
    //         <div className="relative">
    //           <img
    //             src="/img/cart.png"
    //             alt="test"
    //             className="h-10"
    //           />
    //           <div className="font-bold absolute top-[-10px] right-[-9px] text-sm px-2 py-0.5 text-lime-600 rounded-full bg-white">
    //             {quantity}
    //           </div>
    //         </div>
    //       </Link>
    //     </div>
    //   </header>
    // </>

    <nav class="bg-lime-600 shadow-lg px-2 sm:px-4 py-2.5 sticky w-full z-20 top-0 left-0">
      <div class="pl-6 md:pl-0 container flex flex-wrap items-center justify-between mx-auto h-24">
        <Link href="/" passHref className="hover:scale-110 duration-150">
          <img src="/img/logo.png" className="h-20" alt="Flowbite Logo" />
        </Link>

        <div class="pr-6 md:pr-0 flex md:order-2">
          <Link href="/cart" passHref className="hover:scale-110 duration-150">
            <div className="relative">
              <img src="/img/cart.png" alt="test" className="h-10" />
              <div className="font-bold absolute top-[-10px] right-[-9px] text-sm px-2 py-0.5 text-lime-600 rounded-full bg-white">
                {quantity}
              </div>
            </div>
          </Link>
        </div>
        <div
          class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
          id="navbar-sticky"
        >
          <ul className="mx-auto flex items-center hidden md:flex">
            <li className="p-5 xl:p-8 hover:text-white">
              <Link href="/" passHref>
                <span className="text-xl font-semibold">Homepage</span>
              </Link>
            </li>
            <li className="p-5 xl:p-8 hover:text-white">
              <Link href="/menu" passHref>
                <span className="text-xl font-semibold">Menu</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
