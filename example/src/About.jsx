import React, { useContext } from "react"
import { ThemeContext } from "./ThemeProvider"

const About = () => {
  const { theme, setTheme } = useContext(ThemeContext) // Access the theme context if needed

  return (
    <div>
      <h1>About Page</h1>
      <hr></hr>
      <h3>current theme is: {theme}</h3>
      <button onClick={() => setTheme("light")} className="px-4 py-2 bg-blue-500 text-white rounded">
        change theme
      </button>
    </div>
  )
}

export default About
