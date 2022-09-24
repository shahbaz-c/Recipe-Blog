import React from "react"

import Layout from "../global/Layout"
import { Link } from "gatsby"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { Icon } from "@iconify/react"
import slugify from "slugify"
import Seo from "../components/SEO"

const RecipeTemplate = ({ data }) => {
  const {
    title,
    cookTime,
    prepTime,
    servings,
    content,
    ingredients,
    description: { description },
    image,
  } = data.contentfulRecipe

  const { directions, tags } = content
  const pathToImage = getImage(image)

  return (
    <Layout>
      <Seo title={title} description={description} />
      <main className="recipe-template-container">
        <section className="recipe-hero">
          <article className="recipe-description">
            <h1>{title}</h1>
            <p>{description}</p>
            <div className="recipe-info">
              <article>
                <Icon icon="bi:people-fill" />
                <h5>Servings</h5>
                <p>{servings}</p>
              </article>
              <article>
                <Icon icon="ic:baseline-access-time" />
                <h5>Prep Time</h5>
                <p>{prepTime} mins</p>
              </article>
              <article>
                <Icon icon="mdi:pot-steam" />
                <h5>Cook Time</h5>
                <p>{cookTime} mins</p>
              </article>
            </div>
          </article>
          <GatsbyImage
            image={pathToImage}
            alt={title}
            className="recipe-image"
          />
        </section>

        <section className="recipe-content">
          <article>
            <h2>Directions</h2>
            {directions.map((item, index) => {
              return (
                <div key={index} className="recipe-directions">
                  <header>
                    <p>STEP {index + 1}</p>
                  </header>
                  <p>{item}</p>
                  <div className="line"></div>
                </div>
              )
            })}
          </article>

          <article className="ingredients-column">
            <div>
              <h2>Ingredients</h2>
              {ingredients.map((item, index) => {
                return (
                  <p key={index} className="recipe-ingredients">
                    {item}
                  </p>
                )
              })}
            </div>

            <div>
              <h2>Tags</h2>
              <div className="recipe-tags-section">
                {tags.map((tag, index) => {
                  const slug = slugify(tag, { lower: true })
                  return (
                    <p className="recipe-tags" key={index}>
                      <Link to={`/tags/${slug}`}>{tag}</Link>
                    </p>
                  )
                })}
              </div>
            </div>
          </article>
        </section>
      </main>
    </Layout>
  )
}

export const query = graphql`
  query getSingleRecipe($title: String) {
    contentfulRecipe(title: { eq: $title }) {
      title
      cookTime
      prepTime
      servings
      content {
        directions
        tags
      }
      ingredients
      description {
        description
      }
      image {
        gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG)
      }
    }
  }
`

export default RecipeTemplate
