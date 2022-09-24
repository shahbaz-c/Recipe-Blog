import React from "react"

import { graphql, useStaticQuery } from "gatsby"
import RecipeList from "../components/RecipeList"
import { Icon } from "@iconify/react"

const Favourites = () => {
  const data = useStaticQuery(query)
  const recipes = data.allContentfulRecipe.nodes
  return (
    <>
      <main className="content-container">
        <h1 className="favorite-recipes">
          <Icon icon="uil:favorite" inline={true} /> Our Favourites
        </h1>
      </main>
      <div className="favourites">
        <RecipeList recipes={recipes} />
      </div>
    </>
  )
}

export const query = graphql`
  query {
    allContentfulRecipe(filter: { featured: { eq: true } }) {
      nodes {
        id
        title
        cookTime
        image {
          gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
        }
      }
    }
  }
`

export default Favourites
