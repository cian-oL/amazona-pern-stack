import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const HomeScreen = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("/api/products");
      const data = await response.json();
      setProducts(data);
    };
    fetchData();
  }, []);

  return (
    <ul className="products">
      {products.map(
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
