import React from "react";
import Logo from "../../images/Logo.svg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faCartArrowDown } from "@fortawesome/free-solid-svg-icons";
const Product = (props) => {
  const {
    img,
    name,
    price,
    quantity,
    ratings,
    ratingsCount,
    seller,
    shipping,
    stock,
  } = props.product;
  const handleAddToCart = props.handleAddToCart;
  return (
    <div className="card w-[100%] bg-base-100 shadow-xl">
      <figure>
        <img src={img} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>Price : ${price}</p>
        <p className="mt-12">Manufacturer: {seller}</p>
        <p>Rating : {ratings} Star</p>
        <div className="card-actions">
          <button
            onClick={() => handleAddToCart(props.product)}
            className="btn btn-info w-[100%]"
          >
            Add To Cart
            <span className="ml-4">
              <FontAwesomeIcon icon={faCartArrowDown} />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
