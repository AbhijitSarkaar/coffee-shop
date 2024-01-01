import React from "react";
import "./index.scss";

const Product = ({ data }) => {
  return (
    <>
      <section className="product">
        <section className="image-container">
          <img src={data.path} alt="coffee-image" />
          <div className="tag">Popular</div>
        </section>
        <section className="title-price-container">
          <div className="title">{data.title}</div>
          <div className="price">${data.price}</div>
        </section>
        <section className="ratings-container">
          <div className="left">
            <div className="star">
              <img src={"star_fill.svg"} />
            </div>
            <div className="rating">{data.rating}</div>
            <div className="votes">
              {"("}
              {data.votes}
              {" votes)"}
            </div>
          </div>
          <div className="right">
            <div className="sold-out">Sold out</div>
          </div>
        </section>
      </section>
    </>
  );
};

export default Product;
