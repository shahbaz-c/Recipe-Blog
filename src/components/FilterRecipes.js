import React, { useState, useEffect, useRef } from "react"

import setupFilters from "../utilities/setupFilters"
import { Link } from "gatsby"
import { Icon } from "@iconify/react"
import slugify from "slugify"

const FilterRecipes = ({ recipes }) => {
  const [searchTerm, setSearchTerm] = useState("")
  const searchFilters = e => {
    setSearchTerm(e.target.value)
  }

  const [openFilters, setOpenFilters] = useState(false)
  const ref = useRef()

  const handleFilters = () => {
    setOpenFilters(prev => !prev)
  }

  useEffect(() => {
    const closeDropdown = e => {
      if (e.path[0] !== ref.current) {
        setOpenFilters(false)
      }
    }

    document.body.addEventListener("click", closeDropdown)

    return () => {
      document.body.removeEventListener("click", closeDropdown)
    }
  }, [])

  const newFilters = setupFilters(recipes)

  return (
    <div>
      <section className="filter-container">
        <div className="dropdown">
          <button className="dropdown-btn" ref={ref} onClick={handleFilters}>
            <Icon icon="bx:filter-alt" inline={true} /> Filter
          </button>

          {/* <div className="dropdown-content"> */}
          <div className={openFilters ? "dropdown-content" : "hide-filters"}>
            <input
              type="text"
              placeholder="Search..."
              className="searchInput"
              onChange={searchFilters}
            />
            {newFilters
              .filter(val => {
                const [item] = val
                if (searchTerm === "") {
                  return val
                } else if (item.includes(searchTerm)) {
                  return val
                }
                return false
              })
              .map((tag, index) => {
                const [item, value] = tag
                const slug = slugify(item, { lower: true })
                return (
                  <Link to={`/tags/${slug}`} key={index}>
                    {item} ({value})
                  </Link>
                )
              })}
          </div>
        </div>
      </section>
    </div>
  )
}

export default FilterRecipes
