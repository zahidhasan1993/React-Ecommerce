import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan, faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Cart = ({ carts }) => {
  let totalPrice = 0;
  let totalShipping = 0;
  
  for (const cart of carts) {
    totalPrice = totalPrice + cart.price;
    totalShipping = totalShipping + cart.shipping;
  }
  let tax = totalPrice * 7 / 100;
  let grandTotal = totalPrice + totalShipping + tax;
  

  return (
    <div className="my-4 sticky top-6">
      <h1 className="text-3xl text-center">Order Summary</h1>
      <hr className="mt-4" />

      <div className="mt-8 ml-4">
        <h1 className="text-2xl mb-6">Selected Items : {carts.length}</h1>
        <h1 className="text-2xl mb-6">Total Price : ${totalPrice}</h1>
        <h1 className="text-2xl mb-6">
          Total Shipping Charge : ${totalShipping}
        </h1>
        <h1 className="text-2xl mb-6">Tax : {tax.toFixed(2)}</h1>
        <h1 className="text-3xl mb-6">Grand Total : ${grandTotal.toFixed(2)}</h1>
      </div>
      <div className="text-center">
      <button className="btn btn-error btn-wide text-white hover:bg-rose-900">Clear Cart <span className="ml-3"><FontAwesomeIcon icon={faTrashCan} /></span></button>
      <button className="btn btn-wide mt-3 btn-accent text-white">Review Order <span className="ml-3"><FontAwesomeIcon icon={faArrowRight} /></span></button>
      </div>
    </div>
  );
};

export default Cart;
