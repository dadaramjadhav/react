import { Navigate } from "react-router-dom"

function RoleRoute({ allowedRoles, children }) {
  const user = JSON.parse(localStorage.getItem("user"))

  console.log(user.role)
  if (!allowedRoles.includes(user.role)) {
    return <Navigate to="/unauthorized" replace />
  }

  return children
}
export default RoleRoute
