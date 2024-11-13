import Image from "next/image";
import img from "../../../../public/assets/images/ps5.png";
import { useParams } from "next/navigation";
import { fetchProductById } from "@/api/api";

const ProductDetails = async ({ params }: any) => {
  const { id } = params;
  const product = await fetchProductById(id);

  return (
    <>
      <div className="mainContainer pt-32">
        <div className=" flex gap-6">
          <div className="max-w-lg w-full p-7 flex flex-col items-center justify-center">
            <Image
              src={product?.images?.[0] ?? img}
              alt={product?.title}
              width={350}
              height={350}
              className="object-cover"
            />
          </div>
          <div className="flex flex-col justify-between w-full p-7 gap-6">
            <h4 className="text-5xl font-medium">{product?.title ?? "---"}</h4>
            <p className="text-sm">{product?.sku ?? "---"}</p>
            <p className="text-3xl">Rs. {product?.price ?? "---"}</p>
            <p>{product?.description ?? "---"}</p>
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
          <div className="flex flex-col gap-4">
            <div className="flex">
              <p className="w-full max-w-52">Sku</p>
              <p className="w-full">{product?.sku ?? "---"}</p>
            </div>
            <div className="flex">
              <p className="w-full max-w-52">Brand</p>
              <p className="w-full">{product?.brand ?? "---"}</p>
            </div>
            <div className="flex">
              <p className="w-full max-w-52">Category</p>
              <p className="w-full">{product?.category ?? "---"}</p>
            </div>
            <div className="flex">
              <p className="w-full max-w-52">Warranty</p>
              <p className="w-full">{product?.warrantyInformation ?? "---"}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
