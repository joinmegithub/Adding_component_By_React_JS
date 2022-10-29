import React from 'react'

export const Footer = () => {
  let footerStyle = {
    position: "relative",
    width: "100%",
    top: "100%",
    padding: "1px",
  }
  return (
    <footer className="bg-dark text-center text-light" style={footerStyle}>
      <p>copywrite &copy;TodosList</p>
    </footer>
  )
}

export default Footer
