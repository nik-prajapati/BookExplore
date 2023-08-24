import React from "react";
import { NavLink } from "react-router-dom";
import './Nav.css'
const Nav = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light ">
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <NavLink className="nav-link font-weight-bold text-light" to="/">
                Home<span className="sr-only">(current)</span>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link text-light" to="/addbook">
                Add Book
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link text-light" to="/allbook">
                All Book
              </NavLink>
            </li>
            
          </ul>

        </div>
        <div className="nav logo ">         
                BooK Explore
            </div>
      </nav>
    </div>
  );
};

export default Nav;
