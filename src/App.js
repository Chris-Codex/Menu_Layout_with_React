import React, { useState } from "react";
import Menu from "./components/Menu";
import Categories from "./components/Categories";
import Data from "./components/Data";
import "./App.css";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

function App() {
  const [menuItems, setMenuItem] = useState(Data);
  const [categories, setCategories] = useState([]);

  return (
    <main>
      <section>
        <div className="title">
          <h2>Our Menu</h2>
          <div className="underline"></div>
        </div>
        <Categories />
        <Menu menuItems={menuItems} />
      </section>
    </main>
  );
}

export default App;
