import Product from "@/components/Product/Product";
import React from "react";

const Products = () => {
  return (
    <div className="mainContainer gap-5 justify-between grid grid-cols-4 mb-10">
      {[...Array(50)].map((_, index) => (
        <Product key={index} />
      ))}
    </div>
  );
};

export default Products;
