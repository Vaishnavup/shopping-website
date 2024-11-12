import Image from "next/image";
import img from "../../../public/assets/images/ps5.png";
const ProductDetails = () => {
  return (
    <>
      <div className="mainContainer">
        <div className=" flex gap-8">
          <div className="max-w-xl w-full p-7">
            <Image src={img} alt="product-img" />
          </div>
          <div className="flex flex-col justify-between w-full p-7">
            <h4 className="text-5xl font-medium">Title</h4>
            <p className="text-3xl">100.00</p>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt
              quidem consequatur maiores pariatur, voluptas maxime odit natus
              dolores animi harum expedita, tenetur blanditiis fuga
              consequuntur, eligendi eius? Vitae recusandae ipsam quibusdam
              placeat sed nihil ipsa, dolorum ea repellendus ratione amet,
              repellat, numquam reiciendis? Dolore inventore delectus laudantium
              veritatis saepe. Quidem!
            </p>
            <button
              type="button"
              className="bg-black rounded-md text-white p-4 max-w-52"
            >
              Add to Cart
            </button>
          </div>
        </div>
        <div className="mb-10 mt-5">
          <h3 className="text-3xl font-medium pb-6">Specifications</h3>
          <div className="flex">
            <p className="w-full max-w-sm">Model Number</p>
            <p className="w-full">RMX3870</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
