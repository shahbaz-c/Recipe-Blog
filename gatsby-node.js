const path = require("path")
const slugify = require("slugify")

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const response = await graphql(`
    query GetTagRecipes {
      allContentfulRecipe {
        nodes {
          content {
            tags
          }
        }
      }
    }
  `)

  response.data.allContentfulRecipe.nodes.forEach(recipe => {
    recipe.content.tags.forEach(tag => {
      const slug = slugify(tag, { lower: true })
      createPage({
        path: `/tags/${slug}`,
        component: path.resolve(`src/templates/tagsTemplate.js`),
        context: {
          tagName: tag,
        },
      })
    })
  })
}
