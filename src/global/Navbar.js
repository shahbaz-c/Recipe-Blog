import React from "react"
import { Link } from "gatsby"

import { Icon } from "@iconify/react"

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <h1>
          <Link to="/">
            <Icon icon="lucide:chef-hat" inline={true} /> Recipe Blog
          </Link>
        </h1>
      </div>
      <ul className="nav-links">
        <input type="checkbox" id="toggleCheckbox" />
        <label htmlFor="toggleCheckbox" className="hamburger">
          &#9776;
        </label>

        <div className="nav-menu">
          <li>
            <Link to="/" activeStyle={{ color: "#4dffe8" }}>
              Home
            </Link>
          </li>

          <li>
            <Link to="/recipes" activeStyle={{ color: "#4dffe8" }}>
              Recipes
            </Link>
          </li>

          <li>
            <Link to="/about" activeStyle={{ color: "#4dffe8" }}>
              About
            </Link>
          </li>

          <li>
            <Link to="/contact" activeStyle={{ color: "#4dffe8" }}>
              Contact
            </Link>
          </li>
        </div>
      </ul>
    </nav>
  )
}

export default Navbar
