import React from "react";
import "./Navbar.scss";
import { useRef } from "react";
import { Link, NavLink } from "react-router-dom";
import { useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav>
      <Link to="/" className="title">
        FENCESTIMATOR
      </Link>
      <div
        className="menu"
        onClick={() => {
          setMenuOpen(!menuOpen);
        }}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={menuOpen ? "open" : ""}>
        <li>
          <NavLink
            to="/howitworks"
            onClick={() => {
              setMenuOpen(!menuOpen);
            }}
          >
            How this works
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            onClick={() => {
              setMenuOpen(!menuOpen);
            }}
          >
            Contact Me
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
