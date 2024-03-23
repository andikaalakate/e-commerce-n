import Product from "@/components/Product";
import React from "react";

const Trending = () => {
  return (
    <>
      <section id="trending-product">
        <div>
          <h2>
            Our Trending <span>Products</span>
          </h2>
        </div>

        <Product />
      </section>
    </>
  );
};

export default Trending;
