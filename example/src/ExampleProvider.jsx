import { createContext, useContext, useState } from "react"

export const MyThemeContext = createContext()

export function MyThemeProvider({ children }) {
  const [theme, setTheme] = useState()
  return <MyThemeContext.Provider value={{ theme, setTheme }}>{children}</MyThemeContext.Provider>
}
export function useMyTheme() {
  return useContext(MyThemeContext)
}
