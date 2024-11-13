"use client";
import Image from "next/image";
import React from "react";
import img from "../../../public/assets/images/joystickImg.png";
import { useCart } from "@/utils/context/CartContext";
import Link from "next/link";

const CartPage = () => {
  const { cart, removeFromCart, updateQuantity } = useCart();

  console.log(cart);

  return (
    <>
      <div className="mainContainer pt-32">
        <h2 className="text-xl font-medium mb-4">My Cart</h2>
        <div className="grid grid-cols-2 gap-5 mb-4">
          {cart?.map((cartData) => (
            <div
              className="flex justify-between items-center rounded-md border border-solid border-[#e7e7e7] p-3 gap-3"
              key={cartData?.id}
            >
              <div className="max-w-28 py-3 pr-3 ">
                <Link
                  href={{
                    pathname: `/products/${cartData?.id}`,
                  }}
                >
                  <Image
                    src={cartData?.thumbnail ?? img}
                    alt={cartData?.title}
                    width={150}
                    height={150}
                    className="object-cover"
                  />
                </Link>
              </div>
              <div className="w-full px-2">
                <h6 className="font-semibold"> {cartData?.title ?? "---"}</h6>
                <p>Rs. {cartData?.price ?? "---"}</p>
              </div>
              <div className="flex items-center border border-solid border-neutral-500 rounded-md">
                <button className="bg-[#3c3b3bc2] active:bg-slate-700 text-white w-6 rounded-md flex items-center justify-center">
                  -
                </button>
                <input type="number" className="outline-none max-w-6 px-1" />
                <button className="bg-[#3c3b3bc2] active:bg-slate-700 text-white w-6 rounded-md flex items-center justify-center">
                  +
                </button>
              </div>
              <button
                type="button"
                className="bg-black text-white p-2 my-auto rounded-md w-full max-w-32"
              >
                Buy Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default CartPage;
