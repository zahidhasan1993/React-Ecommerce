import React, { useEffect, useState } from "react";
import { addToDb, getShoppingCart } from "../../utilities/fakedb";
import Cart from "../Cart/Cart";
import Product from "../Product/Product";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  //Local storage data catch from useEffect
  useEffect(() => {
    // step : 1 ) get localData value
    const storedDataLocal = getShoppingCart();
    const savedCart = [];
    // console.log(storedDataLocal)
    //step : 2 ) from localData value get the id 
    for (const id in storedDataLocal){
      // step : 3 ) find product by id
      const addedProduct = products.find(product => product.id === id);
      //step : 4 ) set the quantity from localData to product quantity
      const localQuantity = storedDataLocal[id];
      if(addedProduct){
        addedProduct.quantity = localQuantity;
        //add the added product to the saved cart
        savedCart.push(addedProduct);
      }
      
    }
    setCart(savedCart);
  },[products]);


  const handleAddToCart = (product) => {
    const cart2 = [...cart, product];
    setCart(cart2);
    const localStore = addToDb(product.id);
  };

  return (
    <div className="grid md:grid-cols-5 mt-16 gap-4">
      <div id="product" className="md:col-span-4 grid md:grid-cols-3 md:gap-4">
        {products.map((product) => (
          <Product
            key={product.id}
            product={product}
            handleAddToCart={handleAddToCart}
          ></Product>
        ))}
      </div>

      <div id="check-out" className="bg-amber-500  rounded-lg">
        <Cart carts={cart} ></Cart>
      </div>
    </div>
  );
};

export default Shop;
