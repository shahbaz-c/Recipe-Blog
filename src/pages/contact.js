import React from "react"

import { graphql, useStaticQuery } from "gatsby"
import RecipeList from "../components/RecipeList"
import Layout from "../global/Layout"
import Seo from "../components/SEO"

const Contact = () => {
  const data = useStaticQuery(query)
  const recipes = data.allContentfulRecipe.nodes

  const formDisabled = e => {
    e.preventDefault()
    alert(
      "This form is for demonstration purposes only and cannot be submitted."
    )
  }
  return (
    <Layout>
      <Seo title="Contact" description="Contact Page" />
      <main className="content-container">
        <section className="contact-container">
          <article className="contact-text">
            <h1>Contact Us</h1>
            <p>
              Farm-to-table fixie shaman listicle fingerstache williamsburg
              ramps. Bitters praxis schlitz taiyaki. YOLO jean shorts tumblr
              shabby chic gochujang, vaporware bespoke snackwave etsy glossier
              trust fund.
            </p>
            <p>
              Beard green juice hoodie food truck. Tbh hexagon kale chips
              knausgaard keffiyeh. Pinterest twee blue bottle tattooed man
              braid. Gastropub XOXO godard glossier, bushwick irony fanny pack
              taiyaki semiotics beard kale chips pork belly pour-over.
            </p>
            <p>
              Direct trade tacos gochujang, listicle yuccie normcore brunch
              cloud bread banjo chillwave bespoke shoreditch food truck. Austin
              umami cardigan, kale chips poutine selvage fam DIY deep v vice
              stumptown yr.
            </p>
          </article>

          <article className="contact-form">
            <form>
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Your name..."
              />
              <label htmlFor="email">Email</label>
              <input
                type="text"
                id="email"
                name="email"
                placeholder="Your email..."
              />
              <label htmlFor="message">Message</label>
              <textarea
                className="message"
                id="message"
                type="text"
                name="message"
                placeholder="Write
                something..."
              ></textarea>

              <input
                type="submit"
                value="Submit"
                onClick={formDisabled}
              ></input>
            </form>
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

export default Contact
