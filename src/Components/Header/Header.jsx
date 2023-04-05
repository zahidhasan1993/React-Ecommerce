import React from "react";
import Logo from "../../images/Logo.svg";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="navbar bg-slate-900">
      <div className="navbar-start ml-7">
        <img src={Logo} alt="" />
      </div>
      <div className="navbar-end hidden lg:flex mr-7">
        <ul className="menu menu-horizontal px-1 text-white">
          <li>
            <Link to="/">Shop</Link>
          </li>
          <li>
            <Link to="/order">Order</Link>
          </li>
          <li>
            <Link to="inventory">Inventory</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
