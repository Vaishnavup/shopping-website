import img from "../../../public/assets/images/joystickImg.png";
import Image from "next/image";
const Product = () => {
  return (
    <>
      <div className="flex flex-col bg-slate-200 rounded-sm gap-3">
        <div className=" p-4 flex flex-col items-center justify-center bg-slate-300 h-[200px]">
          <div className="max-w-48 ">
            <Image src={img} alt="product-img" />
          </div>
        </div>
        <div className="px-4">
          <p className="font-semibold text-xl">description</p>
          <span className="font-medium">Rs.100</span>
        </div>
        <button type="button" className="bg-black text-white py-3">Add to Cart</button>
      </div>
    </>
  );
};

export default Product;
