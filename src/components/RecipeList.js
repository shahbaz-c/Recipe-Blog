import React from "react"
import { Link } from "gatsby"

import { GatsbyImage, getImage } from "gatsby-plugin-image"
import slugify from "slugify"
import { Icon } from "@iconify/react"

const RecipeList = ({ recipes = [] }) => {
  return (
    <main className="content-container">
      <div className="recipes-list">
        {recipes.map(recipe => {
          const { id, title, cookTime, image } = recipe
          const pathToImage = getImage(image)
          const slug = slugify(title, { lower: true })
          return (
            <Link key={id} to={`/${slug}`} className="recipe">
              <GatsbyImage
                image={pathToImage}
                className="recipe-img"
                alt={title}
              />
              <h4>{title}</h4>
              <p>
                <Icon icon="fluent:timer-12-regular" inline={true} /> Cook Time:{" "}
                {cookTime} mins
              </p>
            </Link>
          )
        })}
      </div>
    </main>
  )
}

export default RecipeList
