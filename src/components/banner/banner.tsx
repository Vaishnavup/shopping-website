import Link from "next/link";
import React from "react";

const Banner = () => {
  return (
    <section className="flex flex-col justify-center py-24 gap-7 banner text-white mb-7">
      <div className="mainContainer flex flex-col gap-10 text-center">
        <h1 className="text-6xl font-semibold">Welcome to Our Product Store</h1>
        <p className="text-3xl">Find the best products here</p>
        <button
          type="button"
          className="bg-white text-black p-4 rounded-md w-full max-w-52 mx-auto hover:bg-red-900 hover:text-white transition-all"
        >
          <Link href={"/products"}>Shop Now</Link>
        </button>
      </div>
    </section>
  );
};

export default Banner;
