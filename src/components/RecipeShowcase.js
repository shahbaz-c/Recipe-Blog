import React from "react"

import ingredientsImage from "../images/ingredientsImage.jpg"

const RecipeShowcase = () => {
  return (
    <header className="recipe-showcase">
      <div className="recipe-showcase-content">
        <div className="recipe-showcase-text">
          <h1>Browse Our Recipes</h1>
          <p>Find the perfect recipe by filtering through our catalogue.</p>
        </div>
        <img className="recipe-showcase-img" src={ingredientsImage} alt="" />
      </div>
    </header>
  )
}

export default RecipeShowcase
