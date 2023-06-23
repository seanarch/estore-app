import React from "react";
import "./_side-nav.scss";

const SideNav = () => {
  return (
    <div className="side-nav">
      <div className="section-title">
        <h3>Category</h3>
      </div>
      <div className="accordion">
        <div className="accordion-item individual-category">
          <button className="accordion-button">
            <div className="category-title">
              <a href="#">Men</a>
            </div>
          </button>
          <div className="accordion-collapse collapse show">
            <div className="accordion-body">
              <ul>
                <li className="sub-items">
                  <a href="#">Coats</a>
                </li>
                <li className="sub-items">
                  <a href="#">Boots</a>
                </li>
                <li className="sub-items">
                  <a href="#">Part Wear</a>
                </li>
                <li className="sub-items">
                  <a href="#">Shirts</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideNav;
