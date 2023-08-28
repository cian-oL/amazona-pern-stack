import React from "react";
import data from "../data";
import { Link, useParams } from "react-router-dom";

const ProductScreen = () => {
  const params = useParams();
  const product = data.products.filter((item) => item.id == params.id)[0];

  return (
    <>
      <p className="back-to-results">
        <Link to="/">Back to Results</Link>
      </p>
      <section className="details">
        <section className="details-image">
          <img src={product.image} alt="Product image" />
        </section>
        <section className="details-info">
          <ul>
            <li>{product.name}</li>
            <li>
              {product.rating} Stars ({product.numReviews} Reviews)
            </li>
            <li>${product.price}</li>
            <li>
              <p>Description</p>
              <p>{product.description}</p>
            </li>
          </ul>
        </section>
        <section className="details-action">
          <ul>
            <li>
              Price: <b>${product.price}</b>
            </li>
            <li>Status:</li>
            <li>
              Qty:
              <select>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
              </select>
            </li>
          </ul>
          <button>Add to Cart</button>
        </section>
      </section>
    </>
  );
};

export default ProductScreen;
