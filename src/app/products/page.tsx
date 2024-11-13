import { fetchProducts } from "@/api/api";
import Product from "@/components/Product/Product";
import React from "react";

const Products = async () => {
  const products = await fetchProducts();
  return (
    <div className="mainContainer gap-5 justify-between grid grid-cols-4 mb-10 pt-32">
      {products?.products?.map((items: any) => (
        <Product key={items?.id} data={items} />
      ))}
    </div>
  );
};

export default Products;
