import React from "react"

import { graphql, useStaticQuery } from "gatsby"
import RecipeList from "../components/RecipeList"
import { Icon } from "@iconify/react"

const Recent = () => {
  const data = useStaticQuery(query)
  const recipes = data.allContentfulRecipe.nodes
  return (
    <>
      <main className="content-container">
        <h1 className="recent-recipes">
          <Icon
            icon="fluent-emoji-high-contrast:fork-and-knife"
            inline={true}
          />{" "}
          Recent Recipes
        </h1>
      </main>
      <div className="recent">
        <RecipeList recipes={recipes} />
      </div>
    </>
  )
}

export const query = graphql`
  query {
    allContentfulRecipe(limit: 6, sort: { order: DESC, fields: createdAt }) {
      nodes {
        id
        title
        cookTime
        image {
          gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG)
        }
      }
    }
  }
`

export default Recent
