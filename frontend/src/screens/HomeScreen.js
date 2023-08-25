import React from "react";
import data from "../data";

const HomeScreen = (props) => {
  return (
    <ul className="products">
      {data.products.map(
        ({ id, image, name, brand, price, rating, numReviews }) => (
          <li className="product" id={id}>
            <img src={image} alt="Product" />
            <p className="product-name">
              <a href="#">{name}</a>
            </p>
            <p className="product-brand">{brand}</p>
            <p className="product-price">${price}</p>
            <p className="product-rating">
              {rating} Stars ({numReviews} reviews)
            </p>
          </li>
        )
      )}
    </ul>
  );
};

export default HomeScreen;
