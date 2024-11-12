import Product from "@/components/Product/Product";
import homeBannerImg from "../../../public/assets/images/landing-banner.png";
import Image from "next/image";
import Banner from "@/components/banner/banner";
import Link from "next/link";

const HomePage = () => {
  return (
    <>
      <Banner />
      <div className="mainContainer">
        <div className="gap-5 justify-between grid grid-cols-4 mb-10">
          {[...Array(10)].map((_, index) => (
            <Product key={index} />
          ))}
        </div>
        <div className="flex justify-center">
          <button
            type="button"
            className="bg-black text-white p-5 rounded-md w-full max-w-52 mb-10 text-center"
          >
            <Link href={"/products"}>View All</Link>
          </button>
        </div>
      </div>
    </>
  );
};

export default HomePage;
