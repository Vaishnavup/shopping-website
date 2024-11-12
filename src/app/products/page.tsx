import { fetchProducts } from "@/api/api";
import Banner from "@/components/banner/banner";
import Product from "@/components/Product/Product";
import React from "react";

const Products = async () => {
  const products = await fetchProducts();
  return (
    <>
      <Banner />
      <div className="mainContainer gap-5 justify-between grid grid-cols-4 mb-10">
        {products?.products?.map((items: any) => (
          <Product key={items?.id} data={items} />
        ))}
      </div>
    </>
  );
};

export default Products;
