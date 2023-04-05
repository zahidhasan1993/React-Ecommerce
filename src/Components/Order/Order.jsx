import React, { useState } from "react";
import Cart from "../Cart/Cart"
import { useLoaderData } from "react-router-dom";
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
    console.log(localCart);
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
      <Cart carts={localCart}  ></Cart>
      </div>
    </div>
  );
};

export default Order;
