import React from "react"

import Layout from "../global/Layout"
import { graphql } from "gatsby"
import RecipeList from "../components/RecipeList"
import Seo from "../components/SEO"

const TagsTemplate = ({ data, pageContext }) => {
  const recipes = data.allContentfulRecipe.nodes
  return (
    <Layout>
      <Seo title={pageContext.tagName} />
      <main className="recipe-tag-container">
        <div className="single-tag-recipes">
          <h1>{pageContext.tagName}</h1>
          <RecipeList recipes={recipes} />
        </div>
      </main>
    </Layout>
  )
}

export const query = graphql`
  query GetRecipeByTag($tagName: String) {
    allContentfulRecipe(
      filter: { content: { tags: { eq: $tagName } } }
      sort: { fields: title, order: ASC }
    ) {
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

export default TagsTemplate
