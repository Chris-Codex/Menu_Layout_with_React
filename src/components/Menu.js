import React from "react";
import NavBar from "./NavBar";

const Menu = () => {
  return (
    <div className="container" style={{ backgroundColor: "#EFF6F9" }}>
      <div className="row">
        <h2
          style={{ textAlign: "center", marginTop: "20px", fontWeight: "bold" }}
        >
          Our Menu
        </h2>
        <NavBar />
        <div className="underline"></div>
        <div className="col-md-6">
          <div className="row">
            <div className="col-md-4" style={{ marginTop: "40px" }}>
              dsadas
            </div>
            <div className="col-md-8" style={{ marginTop: "40px" }}>
              <p></p>
              <hr className="horizontal" />
              <p className="content1_paragraph">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                commodo ligula eget dolor. Aenean massa. Cum sociis natoque
                penatibus et magnis dis parturient montes, nascetur ridiculus
                mus. Donec quam felis, ultricies nec.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-6">dasdasd</div>
      </div>
    </div>
  );
};

export default Menu;
