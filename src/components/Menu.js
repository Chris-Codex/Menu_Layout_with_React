import React from "react";

const Menu = ({ menuItems }) => {
  return (
    <div className="container menu-container">
      <div className="row">
        {menuItems.map((menus) => {
          const { id, title, price, img, desc } = menus;
          return (
            <>
              <div className="col-md-6" key={id} style={{ marginTop: "30px" }}>
                <div className="row">
                  <div className="col-md-5 imgx">
                    <img src={img} alt="name" className="photos" />
                  </div>
                  <div className="col-md-7">
                    <h5>
                      {title}
                      <p style={{ float: "right", color: "#e3b20b" }}>
                        ${price}
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
