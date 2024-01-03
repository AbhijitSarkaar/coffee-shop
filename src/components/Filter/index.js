import React from "react";
import "./index.scss";

const Filter = (props) => {
  const { handleClick, tab } = props;

  return (
    <section className="filter-buttons">
      <div
        className={
          tab === "all"
            ? "filter-button filter-button-selected"
            : "filter-button"
        }
        onClick={() => handleClick("all")}
      >
        All products
      </div>
      <div
        className={
          tab === "available"
            ? "filter-button filter-button-selected"
            : "filter-button"
        }
        onClick={() => handleClick("available")}
      >
        Available now
      </div>
    </section>
  );
};

export default Filter;
