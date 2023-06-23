import React from "react";
import "./_products.scss";

const Products = () => {
  return (
    <div>
      <div className="mx-5 p-3 col-lg-3 col-md-6">
        <div>
          <img src={require("../../assets/images/shop/shop-1.jpg")} alt="" />
        </div>
        <div>
          <h5>
            <a href="#">Jacket</a>
          </h5>
          <p>$45</p>
        </div>
      </div>
    </div>
  );
};

export default Products;
