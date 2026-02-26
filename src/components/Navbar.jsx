import React from "react";
import logo from "../assets/Gwa Logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar fixed top-0 left-0 w-full z-50 bg-white/30 backdrop-blur-md shadow-md px-4">
      {/* LEFT: Logo + Mobile Dropdown */}
      <div className="navbar-start">
        {/* Mobile menu */}
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>

          {/* ✅ Mobile Dropdown Items */}
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[60] mt-3 w-52 p-2 shadow"
          >
             <li><Link to="/">Home</Link></li>
<li><Link to="/about">About Us</Link></li>
<li><Link to="/programs">Programs</Link></li>
<li><Link to="/gallery">Gallery</Link></li>
<li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        {/* ✅ Logo */}
        <a className="btn btn-ghost flex items-center gap-2">
          <img
            src={logo}
            alt="Goodwill Alliance Logo"
            className="h-12 w-auto object-contain"
          />
          <span className="font-bold text-lg hidden sm:block">
            Goodwill Alliance BD
          </span>
        </a>
      </div>

      {/* CENTER: Desktop Menu */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 items-center">
          <li><Link to="/">Home</Link></li>
<li><Link to="/about">About Us</Link></li>
<li><Link to="/programs">Programs</Link></li>
<li><Link to="/gallery">Gallery</Link></li>
<li><Link to="/contact">Contact</Link></li>
          
        </ul>
      </div>

      {/* RIGHT: Optional Button */}
      <div className="navbar-end">
        <Link to="/volunteer" className="btn btn-outline">Join Volunteer</Link>
      </div>
    </div>
  );
};

export default Navbar;