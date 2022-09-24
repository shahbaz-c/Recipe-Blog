import React from "react"
import { Link } from "gatsby"

import showcaseImage from "../images/showcaseImage.svg"

const Showcase = () => {
  return (
    <header className="showcase">
      <div className="container">
        <div className="showcase-content">
          <div className="showcase-info">
            <h1>Quick Simple Recipes</h1>
            <p>
              Exciting fast meals made with everyday ingredients to get you
              through the week.
            </p>
            <Link to="/recipes">
              <button className="btn-primary">Find Recipes</button>
            </Link>
            <Link to="/contact">
              <button className="btn-secondary">Get In Touch</button>
            </Link>
          </div>
          <img src={showcaseImage} alt="" />
        </div>
      </div>
    </header>
  )
}

export default Showcase
