import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center p-4 bg-primary-900 text-white">
      <Link to="/">
        <div>Salco Global Solutions</div>
      </Link>
      <div className="flex justify-center items-center space-x-4">
        <Link to="/about">About</Link>
        <Link to="/products">Products</Link>
        <Link to="/services">Services</Link>
        <Link to="/contact">Contact</Link>
      </div>
      <div>Button</div>
    </nav>
  );
};

export default Navbar;
