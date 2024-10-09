import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-light bg-light mb-2">
      <div className="container-fluid d-flex justify-content-center">
        <NavLink to="/" className="fs-2 fw-bold">
          String Calculator TDD Kata
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
