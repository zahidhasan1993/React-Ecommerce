import React, { useState } from "react";
import Cart from "../Cart/Cart"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Link, useLoaderData } from "react-router-dom";
import OrderDetails from "../orderDetails/OrderDetails";
import { removeFromDb } from "../../utilities/fakedb";


const Order = () => {
    const products = useLoaderData();
    const [localCart,setLocalCart] = useState(products);

    const deleteProductHandler = (id) =>{
        // console.log(id);
        const remainingProducts = localCart.filter(pd => pd.id !== id)
        // // console.log(remainingProducts);
        setLocalCart(remainingProducts);
        removeFromDb(id)

    }
    const handleClearCart = (id) =>{
      setLocalCart([]);
      deleteShoppingCart();

      
    }
    // console.log(localCart);
  return (
    <div className="grid md:grid-cols-5 mt-16 gap-4">
      <div
        id="product"
        className="md:col-span-4 flex flex-col md:ml-36 md: gap-10 "
      >
        {
            localCart.map(product => <OrderDetails key={product.id} product={product} deleteBtn={deleteProductHandler}></OrderDetails>)
        }
      </div>

      <div id="check-out" className="bg-amber-500 rounded-lg">
      <Cart carts={localCart} handleClearCart={handleClearCart}>
      <button className="btn btn-wide mt-3 btn-ghost text-white"><Link to="/checkout">Checkout</Link> <span className="ml-3"><FontAwesomeIcon icon={faArrowRight} /></span></button>
      </Cart>
      </div>
    </div>
  );
};

export default Order;
