import React, { useState } from "react";
import Menu from "./Components/Menu";
import Categories from "./Components/Categories";
import menus from "./data";

const allCategories = ["all", ...new Set(menus.map((menu) => menu.category))];

function App() {
  const [allMenus, setAllMenus] = useState(menus);
  const [categories, setCategories] = useState(allCategories);

  const filterMenus = (category) => {
    if (category === "all") {
      setAllMenus(menus);
      return;
    }
    let filteredMenus = menus.filter((menu) => {
      return menu.category === category;
    });

    console.log(filteredMenus);
    setAllMenus(filteredMenus);
  };

  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>our menu</h2>
          <div className="underline"></div>
        </div>
        <Categories categories={categories} filterMenus={filterMenus} />
        <Menu allMenus={allMenus} />
      </section>
    </main>
  );
}

export default App;
