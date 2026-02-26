import React from "react";
import logo from "../assets/Gwa Logo.png";
import { Link, NavLink } from "react-router-dom";

const activeClass =
  "text-pink-600 font-semibold border-b-2 border-pink-600 pb-1";
const baseClass = "hover:text-pink-500 transition";

const Navbar = () => {
  return (
    <div className="navbar fixed top-0 left-0 w-full z-50 bg-white/30 backdrop-blur-md shadow-md px-2 sm:px-4">
      {/* LEFT: Mobile Menu + Logo */}
      <div className="navbar-start flex items-center gap-0">
        {/* Mobile menu */}
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost px-2 lg:hidden">
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
          </label>

          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[60] mt-3 w-52 p-2 shadow"
          >
            <li>
              <NavLink
                to="/"
                end
                className={({ isActive }) => (isActive ? activeClass : baseClass)}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) => (isActive ? activeClass : baseClass)}
              >
                About Us
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/programs"
                className={({ isActive }) => (isActive ? activeClass : baseClass)}
              >
                Programs
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/gallery"
                className={({ isActive }) => (isActive ? activeClass : baseClass)}
              >
                Gallery
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) => (isActive ? activeClass : baseClass)}
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>

        {/* Logo */}
        <Link to="/" className="btn btn-ghost px-1 flex items-center gap-1">
          <img
            src={logo}
            alt="Goodwill Alliance Logo"
            className="h-10 sm:h-12 w-auto object-contain"
          />
          <span className="font-bold text-base sm:text-lg hidden sm:block">
            Goodwill Alliance BD
          </span>
        </Link>
      </div>

      {/* CENTER: Desktop Menu */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 items-center gap-1">
          <li>
            <NavLink
              to="/"
              end
              className={({ isActive }) => (isActive ? activeClass : baseClass)}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) => (isActive ? activeClass : baseClass)}
            >
              About Us
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/programs"
              className={({ isActive }) => (isActive ? activeClass : baseClass)}
            >
              Programs
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/gallery"
              className={({ isActive }) => (isActive ? activeClass : baseClass)}
            >
              Gallery
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) => (isActive ? activeClass : baseClass)}
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </div>

      {/* RIGHT: Button */}
      <div className="navbar-end">
        <Link
          to="/volunteer"
          className="btn btn-outline btn-sm sm:btn-md rounded-full"
        >
          Join Volunteer
        </Link>
      </div>
    </div>
  );
};

export default Navbar;