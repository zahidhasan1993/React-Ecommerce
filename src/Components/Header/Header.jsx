import React, { useContext } from "react";
import Logo from "../../images/Logo.svg";
import { Link } from "react-router-dom";
import { UserData } from "../Providers/AuthProvider";

const Header = () => {
  const {user,logOut} = useContext(UserData);
  const handleSignOut = () =>{
    logOut()
    .then(() => {
      //signout successfull
    })
    .catch(()=> {
      //an error happend
    })
  }
  
  return (
    <div className="navbar bg-slate-900">
      <div className="navbar-start ml-7">
        <Link to="/"><img src={Logo} alt="" /></Link>
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
          <li>
            <Link to="/signup">Sign Up</Link>
          </li>
          {
              user && <li>{user.email} <button onClick={handleSignOut} className="btn btn-error ml-4">Sign Out</button> </li>
          }
        </ul>
      </div>
    </div>
  );
};

export default Header;
