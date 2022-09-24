import React from "react"

import { graphql, useStaticQuery } from "gatsby"
import Layout from "../global/Layout"
import RecipeList from "../components/RecipeList"
import aboutImage from "../images/aboutPageImage.svg"
import Seo from "../components/SEO"

const About = () => {
  const data = useStaticQuery(query)
  const recipes = data.allContentfulRecipe.nodes
  return (
    <Layout>
      <Seo title="About" description="About Page" />
      <main className="content-container">
        <section className="about-container">
          <article className="about-text">
            <h1>About</h1>
            <p>
              This application was made with Gatsby.js and utilised Contentful's
              headless CMS.
            </p>
            <p>
              This Recipe Blog made use of Gatsby's file system, slugs, Gatsby
              Node's APIs including createPages and the Gatsby Head API.
            </p>
            <p>
              The site is maintained using Contentful's CMS where the user can
              add additional recipes, adjust 'featured' recipes, and edit
              existing recipe posts.
            </p>
          </article>
          <article className="about-image">
            <img src={aboutImage} alt="" />
          </article>
        </section>
      </main>
      <section className="featured-recipes">
        <h2>Check Out These Great Recipes!</h2>
        <RecipeList recipes={recipes} />
      </section>
    </Layout>
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

export default About
