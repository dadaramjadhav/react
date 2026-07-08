import React from "react"
import { Navigate, useLocation } from "react-router-dom"
import { useAuth } from "./useAuth"

function ProtectedRoute({ children }) {
  const location = useLocation()

  const { isAuthenticated } = useAuth() // Replace with your actual authentication logic
  return isAuthenticated ? children : <Navigate to="/login" state={{ from: location }} replace />
}

export default ProtectedRoute
