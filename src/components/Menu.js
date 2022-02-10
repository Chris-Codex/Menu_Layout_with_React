import React from "react";
import NavBar from "./NavBar";

const Menu = ({ menuItems }) => {
  return (
    <div className="container menu-container">
      <div className="row">
        <h2 className="our-menu">Our Menu</h2>
        <NavBar />
        {menuItems.map((menus) => {
          const { id, title, category, price, img, desc } = menus;
          return (
            <>
              <div className="col-md-6" style={{ marginTop: "30px" }}>
                <div className="row">
                  <div className="col-md-4 imgx">
                    <img src={img} alt="name" height={170} width={200} />
                  </div>
                  <div className="col-md-8">
                    <h5>
                      {title}
                      <p style={{ float: "right", color: "#e3b20b" }}>
                        {price}
                      </p>
                    </h5>
                    <hr className="horizontal" />
                    <p className="content1_paragraph">{desc}</p>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default Menu;
