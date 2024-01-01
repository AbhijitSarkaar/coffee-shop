import React from "react";
import Product from "~/components/Product";
import "./index.scss";

const ProductList = ({ products }) => {
  console.log(products);
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
