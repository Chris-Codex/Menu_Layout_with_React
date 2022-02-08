import React from "react";

const NavBar = () => {
  return (
    <>
      <div className="naveBar">
        <ul class="nav justify-content-center">
          <li class="nav-item">
            <a class="nav-link active" href="#">
              All
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              Breakfast
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              Lunch
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              Shakes
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default NavBar;
