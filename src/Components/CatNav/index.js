import React from "react";
import "./_cat-nav.scss";

const CatNav = () => {
  const categories = ["Men", "Women", "Kids", "Best Offers"];
  return (
    <div className="cat-nav-container container">
      <ul>
        {categories.map((category) => {
          return (
            <li key={category} className="list-items">
              <a href="#">{category}</a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default CatNav;
