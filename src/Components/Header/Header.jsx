import React from "react";
import Logo from "../../images/Logo.svg";

const Header = () => {
  return (
    <div className="">
      <div className="navbar bg-slate-900">
        <div className="flex-1">
          <img src={Logo} alt="" />
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li>
              <a href="" className="text-white">Order</a>
            </li>
            <li>
              <a href="" className="text-white">Order Review</a>
            </li>
            <li>
              <a href="" className="text-white">Manage Inventory</a>
            </li>
            <li>
              <a href="" className="text-white">Login</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
