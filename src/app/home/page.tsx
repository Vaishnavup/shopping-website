import Product from "@/components/Product/Product";
import homeBannerImg from "../../../public/assets/images/landing-banner.png";
import Image from "next/image";
const HomePage = () => {
  return (
    <>
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
      <div className="mainContainer gap-5 justify-between grid grid-cols-4 mb-10">
        {[...Array(10)].map((_, index) => (
          <Product key={index} />
        ))}
      </div>
    </>
  );
};

export default HomePage;
