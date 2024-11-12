import Link from "next/link";
import img from "../../../public/assets/images/joystickImg.png";
import Image from "next/image";
const Product = ({ data }: any) => {
  return (
    <>
      <div className="flex flex-col bg-slate-200 rounded-sm gap-3">
        <div className=" p-4 flex flex-col items-center justify-center bg-slate-300 h-[200px]">
          <div className="max-w-48 ">
            <Link
              href={{
                pathname: `/products/${data?.id}`,
              }}
            >
              <Image
                src={data?.thumbnail ?? img}
                alt="product-img"
                width={150}
                height={150}
                className="object-cover"
              />
            </Link>
          </div>
        </div>
        <div className="px-4">
          <Link
            href={{
              pathname: `/products/${data?.id}`,
            }}
          >
            <p className="font-semibold text-xl">{data?.title ?? "---"}</p>
            <span className="font-medium">Rs. {data?.price ?? "---"}</span>
          </Link>
        </div>
        <button type="button" className="bg-black text-white py-3">
          Add to Cart
        </button>
      </div>
    </>
  );
};

export default Product;
