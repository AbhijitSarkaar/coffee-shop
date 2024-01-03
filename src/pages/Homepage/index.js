import React, { useState } from "react";
import "./index.scss";
import ProductList from "~/components/ProductList";
import products from "~/data/products";
import Filter from "~/components/Filter";

const title = "Our Collection";
const desc = `Introducing our coffee collection, a selection of unique coffees
from different roast types and origins, expertly roasted in small
batches and shipped fresh weekly`;

const Homepage = () => {
  const [tab, setTab] = useState("all");

  return (
    <>
      <section className="app-container">
        <section className="hero-banner">
          <img src="images/hero-banner.jpg" />
        </section>
        <section className="body-content">
          <section className="header-text">
            <p className="title">{title}</p>
            <p className="description">{desc}</p>
          </section>
          <Filter handleClick={(value) => setTab(value)} tab={tab} />
          <ProductList products={products} tab={tab} />
        </section>
      </section>
    </>
  );
};

export default Homepage;
