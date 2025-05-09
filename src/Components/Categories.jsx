import React, { useEffect, useState } from "react";
import menu from "../data";

const Categories = ({ categories , filterMenus }) => {
  const[mainCategory , setMainCategory] = useState("all")
  return (
    <div className="btn-container">
      {categories.map((category , index) => (
        <button
          key={index}
          type="button"
          onClick={()=>{ 
            setMainCategory(category)
            filterMenus(category)
          }}
          className={category === mainCategory ? "filter-btn highlight" : "filter-btn"}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default Categories;
