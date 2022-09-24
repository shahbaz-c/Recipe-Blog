import React from "react"
import { Link } from "gatsby"

import Layout from "../global/Layout"
import Seo from "../components/SEO"

const PageNotFound = () => {
  return (
    <Layout>
      <Seo title="Error" />
      <section className="center">
        <h1 className="notFound-heading">Page Not Found</h1>
        <p className="back-home">
          <Link className="link" to="/">
            Return to Home Page
          </Link>
        </p>
      </section>
    </Layout>
  )
}

export default PageNotFound
