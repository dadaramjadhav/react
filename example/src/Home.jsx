import React from "react"
import { useLocation } from "react-router-dom"

const Home = () => {
  const location = useLocation()
  const message = location.state?.message

  return (
    <div>
      Home...........
      <br />
      <br />
      {message && <p>{message} ...........</p>}
    </div>
  )
}

export default Home
