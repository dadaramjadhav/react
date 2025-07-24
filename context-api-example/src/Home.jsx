import React from "react";
import { useTheme } from "./ThemeContext";

const Home = () => {
  const { theme, toggleTheme } = useTheme();

  const backgroundColor = theme === "light" ? "#fff" : "#222";
  const color = theme === "light" ? "#000" : "#fff";

  return (
    <div style={{ backgroundColor, color, height: "100vh", padding: "2rem" }}>
      <h1>{theme.toUpperCase()} MODE</h1>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
};

export default Home;
