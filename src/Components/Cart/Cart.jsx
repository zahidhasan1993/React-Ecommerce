import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { clearLocalStorage } from "../../utilities/fakedb";
import { Link } from "react-router-dom";

const Cart = ({ carts,handleClearCart,children }) => {
  let totalPrice = 0;
  let totalShipping = 0;
  let quantity = 0;
  // let singleCart = {};
  
  for (const cart of carts) {
    cart.quantity = cart.quantity || 1;
    totalPrice = totalPrice + cart.price * cart.quantity;
    totalShipping = totalShipping + cart.shipping;
    quantity = quantity + cart.quantity;
    // singleCart = cart; 
  }

  let tax = totalPrice * 7 / 100;
  let grandTotal = totalPrice + totalShipping + tax;
  

  return (
    <div className="my-4 sticky top-6">
      <h1 className="text-3xl text-center">Order Summary</h1>
      <hr className="mt-4" />

      <div className="mt-8 ml-4">
        <h1 className="text-2xl mb-6">Selected Items : {quantity}</h1>
        <h1 className="text-2xl mb-6">Total Price : ${totalPrice}</h1>
        <h1 className="text-2xl mb-6">
          Total Shipping Charge : ${totalShipping}
        </h1>
        <h1 className="text-2xl mb-6">Tax : ${tax.toFixed(2)}</h1>
        <h1 className="text-3xl mb-6">Grand Total : ${grandTotal.toFixed(2)}</h1>
      </div>
      <div className="text-center">
      <button onClick={handleClearCart} className="btn btn-warning w-[100%] text-white hover:bg-rose-900">Clear Cart <span className="ml-3"><FontAwesomeIcon icon={faTrashCan} /></span></button>
      {children}
      </div>
    </div>
  );
};

export default Cart;
