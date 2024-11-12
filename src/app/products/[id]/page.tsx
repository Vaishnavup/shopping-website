import Image from "next/image";
import img from "../../../../public/assets/images/ps5.png";
import { useParams } from "next/navigation";
import { fetchProductById } from "@/api/api";

const ProductDetails = async ({ params }: any) => {
  const { id } = params;
  const product = await fetchProductById(id);

  console.log(product);

  return (
    <>
      <div className="mainContainer">
        <div className=" flex gap-8">
          <div className="max-w-xl w-full p-7">
            <Image
              src={product?.images?.[0] ?? img}
              alt="product-img"
              width={250}
              height={250}
              className="object-cover"
            />
          </div>
          <div className="flex flex-col justify-between w-full p-7">
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
          <div className="flex">
            <p className="w-full max-w-sm">Sku</p>
            <p className="w-full">{product?.sku ?? "---"}</p>
          </div>
          <div className="flex">
            <p className="w-full max-w-sm">Brand</p>
            <p className="w-full">{product?.brand ?? "---"}</p>
          </div>
          <div className="flex">
            <p className="w-full max-w-sm">Category</p>
            <p className="w-full">{product?.category ?? "---"}</p>
          </div>
          <div className="flex">
            <p className="w-full max-w-sm">Warranty</p>
            <p className="w-full">{product?.warrantyInformation ?? "---"}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
