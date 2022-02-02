import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
      <Link to="/service">Service</Link>
      <Link to="/blog">blog</Link>
    </>
  );
};

export default Navbar;
