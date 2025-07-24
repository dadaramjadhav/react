import { Navigate } from "react-router-dom";

function PrivateRoute({ children }) {
  const isAuthenticated = true; // replace with real logic
  return isAuthenticated ? children : <Navigate to="/login" />;
}
export default PrivateRoute;
