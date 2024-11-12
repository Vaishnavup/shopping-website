import Image from "next/image";
import React from "react";
import img from "../../../public/assets/images/joystickImg.png";

const CartPage = () => {
  return (
    <>
      <div className="mainContainer">
        <h2 className="text-xl font-medium mb-4">My Cart</h2>
        <div className="grid grid-cols-2 gap-5 mb-4">
          {[...Array(10)].map((_, index) => (
            <div
              className="flex justify-between items-center rounded-md border border-solid border-[#e7e7e7] p-3"
              key={index}
            >
              <div className="max-w-28 py-3 pr-3 ">
                <Image src={img} alt="cart-img" />
              </div>
              <div className="w-full px-2">
                <h6 className="font-semibold">HAii</h6>
                <p>100.00</p>
              </div>
              <button
                type="button"
                className="bg-black text-white p-2 my-auto rounded-sm w-full max-w-32"
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
