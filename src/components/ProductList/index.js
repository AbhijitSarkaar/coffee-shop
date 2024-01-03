import React from "react";
import Product from "~/components/Product";
import "./index.scss";

const ProductList = ({ products, tab }) => {
  if (tab === "available")
    products = products.filter((product) => !product.sold_out);

  return (
    <>
      <section className="products">
        {products.map((product) => (
          <Product data={product} key={product.path} />
        ))}
      </section>
    </>
  );
};

export default ProductList;
