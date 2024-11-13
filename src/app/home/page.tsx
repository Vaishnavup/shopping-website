import Product from "@/components/Product/Product";
import homeBannerImg from "../../../public/assets/images/landing-banner.png";
import Image from "next/image";
import Banner from "@/components/banner/banner";
import Link from "next/link";
import { fetchProducts } from "@/api/api";
import arrow from "../../../public/assets/icons/right-arrow.svg";
const HomePage = async () => {
  const products = await fetchProducts();

  return (
    <>
      <Banner />
      <div className="mainContainer">
        <div className="flex justify-between pb-5">
          <h2 className="text-3xl font-medium">Products</h2>
          <span className="text-xl flex items-center gap-2 cursor-pointer">
            View all
            <Image src={arrow} alt={"right-arrow"} />
          </span>
        </div>
        <div className="gap-5 justify-between grid grid-cols-4 mb-10">
          {products?.products?.slice(0, 12)?.map((items: any) => (
            <Product key={items?.id} data={items} />
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
