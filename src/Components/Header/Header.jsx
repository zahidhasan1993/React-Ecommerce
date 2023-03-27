import React from "react";
import Logo from "../../images/Logo.svg";

const Header = () => {
  return (
    <div className="mb-6">
      <div className="navbar bg-slate-900">
        <div className="md:flex-1 ml-8">
          <img src={Logo} alt="" />
        </div>
        <div className="md:flex-none mr-8">
          <ul className="menu menu-horizontal px-1">
            <li>
              <a href="./order" className="text-white">Order</a>
            </li>
            <li>
              <a href="./order-review" className="text-white">Order Review</a>
            </li>
            <li>
              <a href="./manage-inventory" className="text-white">Manage Inventory</a>
            </li>
            <li>
              <a href="./Login" className="text-white">Login</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
