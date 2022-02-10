import React, { useState } from "react";
import Menu from "./components/Menu";
import Categories from "./components/Categories";
import Data from "./components/Data";
import "./App.css";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

//Function to filter unique item
const allCategories = ["All", ...new Set(Data.map((item) => item.category))];
console.log(allCategories);

function App() {
  const [menuItems, setMenuItem] = useState(Data);
  const [categories, setCategories] = useState(allCategories);

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
        <Categories categories={categories} filterItems={filterItems} />
        <Menu menuItems={menuItems} />
      </section>
    </main>
  );
}

export default App;
