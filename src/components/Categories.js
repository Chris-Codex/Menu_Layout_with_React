import React from "react";

const Categories = ({ filterItems }) => {
  return (
    <div className="container menu-container">
      <h3 className="our-menus">Our Menu</h3>
      <div className="btn-container">
        <button
          type="button"
          style={{ color: "#e3b20b" }}
          class="btn"
          onClick={() => filterItems("all")}
        >
          All
        </button>
        <button
          type="button"
          style={{ color: "#e3b20b" }}
          class="btn btn-click"
          onClick={() => filterItems("Electronics")}
        >
          Electronics
        </button>
        <button
          type="button"
          style={{ color: "#e3b20b" }}
          class="btn"
          onClick={() => filterItems("Fashion")}
        >
          Fashion
        </button>
        <button
          type="button"
          style={{ color: "#e3b20b" }}
          class="btn"
          onClick={() => filterItems("Kitchen")}
        >
          Kitchen Accessories
        </button>
      </div>
    </div>
  );
};

export default Categories;
