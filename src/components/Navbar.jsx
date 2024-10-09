import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav class="navbar navbar-light bg-light mb-2">
      <div class="container-fluid d-flex justify-content-center">
        <NavLink to="/" className="fs-2 fw-bold">
          String Calculator
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
