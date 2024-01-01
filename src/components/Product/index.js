import React from "react";
import "./index.scss";

const Product = ({ data }) => {
  return (
    <>
      <section className="product">
        <section className="image-container">
          <img src={data.path} alt="coffee-image" />
          {data.popular && <div className="tag">Popular</div>}
        </section>
        <section className="title-price-container">
          <div className="title">{data.title}</div>
          <div className="price">${data.price}</div>
        </section>
        <section className="ratings-container">
          <div className="left">
            <div className="star">
              <img src={data.rating ? "star_fill.svg" : "star.svg"} />
            </div>
            {data.rating && (
              <>
                <div className="rating">{data.rating}</div>
                <div className="votes">
                  {"("}
                  {data.votes}
                  {" votes)"}
                </div>
              </>
            )}
          </div>
          {data.sold_out && (
            <div className="right">
              <div className="sold-out">Sold out</div>
            </div>
          )}
        </section>
      </section>
    </>
  );
};

export default Product;
