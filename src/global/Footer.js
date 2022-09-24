import React from "react"

const Footer = () => {
  return (
    <footer className="footer">
      <p>
        <span className="footer-span">Built with Gatsby</span> &copy;{" "}
        {new Date().getFullYear()} Recipe Blog
      </p>
    </footer>
  )
}

export default Footer
