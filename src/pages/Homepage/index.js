import React, { useState } from "react";
import "./index.scss";
import HeroBanner from "images/hero-banner.jpg";
import ProductList from "~/components/ProductList";

const Homepage = () => {
  const [title, setTitle] = useState("Our Collection");
  const [desc, setDesc] =
    useState(`Introducing our coffee collection, a selection of unique coffees
  from different roast types and origins, expertly roasted in small
  batches and shipped fresh weekly`);

  return (
    <>
      <section className="app-container">
        <section className="hero-banner">
          <img src={HeroBanner} />
        </section>
        <section className="body-content">
          <section className="header-text">
            <p className="title">{title}</p>
            <p className="description">{desc}</p>
          </section>
          {/* <section className="filter-buttons"></section> */}
          <ProductList />
        </section>
      </section>
    </>
  );
};

export default Homepage;
