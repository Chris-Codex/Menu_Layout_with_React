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

  const filterItems = (category) => {
    if (category === "all") {
      setMenuItem(Data);
      return;
    }
    const newItems = Data.filter((items) => items.category === category);
    setMenuItem(newItems);
  };

  return (
    <main>
      <section>
        <Categories filterItems={filterItems} />
        <Menu menuItems={menuItems} />
      </section>
    </main>
  );
}

export default App;
