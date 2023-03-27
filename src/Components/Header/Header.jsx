import React from "react";
import Logo from "../../images/Logo.svg";

const Header = () => {
  return (
    <div className="navbar bg-slate-900">
      <div className="navbar-start ml-7">
        <img src={Logo} alt="" />
      </div>
      <div className="navbar-end hidden lg:flex mr-7">
        <ul className="menu menu-horizontal px-1 text-white">
          <li>
            <a>Order</a>
          </li>
          <li>
            <a>Order Review</a>
          </li>
          <li>
            <a>Manage Inventory</a>
          </li>
          <li>
            <a>Login</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
