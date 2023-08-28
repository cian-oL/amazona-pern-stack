import React from "react";
import data from "../data";
import { Link } from "react-router-dom";

const HomeScreen = () => {
  return (
    <ul className="products">
      {data.products.map(
        ({ id, image, name, brand, price, rating, numReviews }) => (
          <li className="product" key={id}>
            <Link to={`/product/${id}`}>
              <img src={image} alt="Product" />
            </Link>
            <p className="product-name">
              <Link to={`/product/${id}`}>{name}</Link>
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
