import React, { useState } from 'react';

const Cart = ({carts}) => {
    let totalPrice = 0;
    let totalShipping = 0;
    for(const cart of carts){
       totalPrice = totalPrice + cart.price;
       totalShipping = totalShipping + cart.shipping;
    }

    let grandTotal = totalPrice + totalShipping;
    // console.log(totalPrice);
    
    return (
        <div className='mt-4'>
            <h1 className='text-3xl text-center'>Order Summary</h1>
            <hr className='mt-4'/>
            
            <div className='mt-8 ml-4'>
            <h1 className='text-2xl mb-6'>Selected Items : {carts.length}</h1>
            <h1 className='text-2xl mb-6'>Total Price : ${totalPrice}</h1>
            <h1 className='text-2xl mb-6'>Total Shipping Charge : ${totalShipping}</h1>
            <h1 className='text-2xl mb-6'>Tax : {}</h1>
            <h1 className='text-3xl mb-6'>Grand Total : ${grandTotal}</h1>
            </div>
        </div>
    );
};

export default Cart;