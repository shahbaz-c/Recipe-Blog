const setupFilters = recipes => {
  const recipeTags = {}

  recipes.forEach(recipe => {
    recipe.content.tags.forEach(tag => {
      if (recipeTags[tag]) {
        recipeTags[tag] = recipeTags[tag] + 1
      } else {
        recipeTags[tag] = 1
      }
    })
  })

  const orderTags = Object.entries(recipeTags).sort((a, b) => {
    const [primaryTag] = a
    const [secondaryTag] = b
    return primaryTag.localeCompare(secondaryTag)
  })

  return orderTags
}

export default setupFilters
