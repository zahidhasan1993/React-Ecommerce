import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";

const OrderDetails = ({ product,deleteBtn }) => {
  const { img, name, price, quantity, shipping,id } = product;

  // console.log(deleteBtn);
  return (
    <div className="w-[26rem] h-20 md:w-[33rem] md:h-28 md:border border-gray-200 rounded grid grid-cols-3">
      <div className="mt-[.4rem] ml-[0.4rem] col-span-2 flex gap-1">
        <img src={img} className="w-24 h-24" alt="" />
        <div>
          <p>{name}</p>
          <p>
            Price : <span className="text-yellow-600">${price}</span>
          </p>
          <p>
            Shipping-Charge :{" "}
            <span className="text-yellow-600">${shipping}</span>
          </p>
        </div>
      </div>
      <button onClick={() => deleteBtn(id)} className="flex justify-end items-center mr-5">
      <FontAwesomeIcon className="text-red-400 text-3xl" icon={faTrashCan} />
      </button>
    </div>
  );
};

export default OrderDetails;
