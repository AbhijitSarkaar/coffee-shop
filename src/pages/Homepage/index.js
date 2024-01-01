import React, { useState } from "react";
import "./index.scss";
import ProductList from "~/components/ProductList";
import products from "~/data/products";

const title = "Our Collection";
const desc = `Introducing our coffee collection, a selection of unique coffees
from different roast types and origins, expertly roasted in small
batches and shipped fresh weekly`;

const Homepage = () => {
  return (
    <>
      <section className="app-container">
        <section className="hero-banner">
          <img src="hero-banner.jpg" />
        </section>
        <section className="body-content">
          <section className="header-text">
            <p className="title">{title}</p>
            <p className="description">{desc}</p>
          </section>
          {/* <section className="filter-buttons"></section> */}
          <ProductList products={products} />
        </section>
      </section>
    </>
  );
};

export default Homepage;
