import React from "react"

import { graphql, useStaticQuery } from "gatsby"

import FilterRecipes from "./FilterRecipes"
import RecipeList from "./RecipeList"

const query = graphql`
  query {
    allContentfulRecipe {
      nodes {
        id
        title
        cookTime
        content {
          tags
        }
        image {
          gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG)
        }
      }
    }
  }
`

const Recipes = () => {
  const data = useStaticQuery(query)
  const recipes = data.allContentfulRecipe.nodes

  return (
    <>
      <FilterRecipes recipes={recipes} />
      <RecipeList recipes={recipes} />
    </>
  )
}

export default Recipes
