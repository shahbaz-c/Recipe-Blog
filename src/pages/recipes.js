import React from "react"

import Layout from "../global/Layout"
import RecipeShowcase from "../components/RecipeShowcase"
import AllRecipes from "../components/AllRecipes"
import Seo from "../components/SEO"

const Recipes = () => {
  return (
    <Layout>
      <Seo title="Recipes" description="Recipe Page" />
      <RecipeShowcase />
      <main className="recipe-container">
        <AllRecipes />
      </main>
    </Layout>
  )
}

export default Recipes
