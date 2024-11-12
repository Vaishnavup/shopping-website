import React from "react";

const Banner = () => {
  return (
    <section className="mainContainer flex flex-col py-24 gap-7">
      <h1 className="text-6xl font-semibold">Welcome to Our Product Store</h1>
      <p className="text-3xl">Find the best products here</p>
      <button
        type="button"
        className="bg-black text-white p-5 rounded-md w-full max-w-52"
      >
        Shop Now
      </button>
    </section>
  );
};

export default Banner;
