import React, { useEffect, useState } from "react";
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
  const handleAddToCart = (product) => {
    const cart2 = [...cart, product];
    setCart(cart2);
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
        <Cart carts={cart}></Cart>
      </div>
    </div>
  );
};

export default Shop;
