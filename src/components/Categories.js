import React from "react";

const Categories = ({ categories, filterItems }) => {
  return (
    <div className="container menu-container">
      <h3 className="our-menus">Our Menu</h3>
      <div className="btn-container">
        {categories.map((category, index) => {
          return (
            <button
              type="button"
              style={{ color: "#e3b20b" }}
              class="btn"
              key={index}
              onClick={() => filterItems(category)}
            >
              {category}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default Categories;
