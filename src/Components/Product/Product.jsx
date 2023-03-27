import React from "react";

const Product = (props) => {
    const {img,name,price,quantity,ratings,ratingsCount,seller,shipping,stock} = props.product;
  return (
    <div className="card w-[100%] bg-base-100 shadow-xl">
      <figure>
        <img
          src={img}
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>Price : {price}</p>
        <p className="mt-12">Manufacturer: {seller}</p>
        <p>Rating : {ratings} Star</p>
        <div className="card-actions">
          <button className="btn btn-info btn-wide">Add To Cart</button>
        </div>
      </div>
    </div>
  );
};

export default Product;
