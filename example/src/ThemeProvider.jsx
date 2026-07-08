import React, { createContext, useState } from "react"

const ThemeContext = createContext()

export default function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("blue")
  return <ThemeContext.Provider value={{ theme, setTheme }}>{children}</ThemeContext.Provider>
}
export { ThemeContext }
