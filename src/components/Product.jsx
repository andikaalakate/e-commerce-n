import React from "react";

const Product = () => {
  return (
    <>
      <div className="product">
        <div className="">
          <img src="images/1.jpg" alt="" />
          <div className="product-text">
            <h5>Sale</h5>
          </div>

          <div>
            <i className="bx bx-heart"></i>
          </div>

          <div>
            <i className="bx bx-star"></i>
            <i className="bx bx-star"></i>
            <i className="bx bx-star"></i>
            <i className="bx bx-star"></i>
            <i className="bx bxs-star-half"></i>
          </div>

          <div>
            <h4>Half Running Set</h4>
            <p>$65.00 - $70.00</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
