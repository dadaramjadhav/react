import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { useAuth } from "./useAuth"

const Logout = () => {
  const navigate = useNavigate()
  const { logout } = useAuth()
  useEffect(() => {
    logout() // Call the logout function from AuthProvider
    navigate("/", { replace: true, state: { message: "Logout successful" } }) // redirect after logout
  }, [logout, navigate])

  return null // nothing to render
}

export default Logout
