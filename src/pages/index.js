import React from "react"

import Layout from "../global/Layout"
import Showcase from "../components/Showcase"
import Recent from "../components/Recent"
import Favourites from "../components/Favourites"
import Seo from "../components/SEO"

const Home = () => {
  return (
    <Layout>
      <Seo title="Home" />
      <Showcase />
      <Favourites />
      <Recent />
    </Layout>
  )
}

export default Home
