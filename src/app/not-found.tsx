import React from "react";
import img from '../../public/assets/images/404.jpg'
import Image from "next/image";
const NotFound = () => {
  return (
    <>
      <section className="mainContainer pt-32 pb-10 flex flex-col gap-8">
        <div className="max-w-md mx-auto">
          <Image src={img} alt="order-success" />
        </div>
        <button className="bg-black text-white mx-auto p-3 rounded-md hover:bg-slate-400 transition-all w-full max-w-28">
          Back
        </button>
      </section>
    </>
  );
};

export default NotFound;
