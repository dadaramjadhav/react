import { Route, Routes, useLocation } from "react-router-dom"
import "./App.css"
import "./index.css"
import NavBar from "./NavBar"
import Home from "./Home"
import About from "./About"
import Login from "./Login"
import Product from "./Product"
import Users from "./Users"
import Dashboard from "./Dashboard"
import Profile from "./Profile"
import Settings from "./Settings"
import ProtectedRoute from "./ProtectedRoute"
import { lazy, Suspense } from "react"
import Logout from "./Logout"
import Unauthorized from "./Unauthorized"
import RoleRoute from "./RoleRoute"
import ErrorBoundary from "./ErrorBoundary"
const Admin = lazy(() => import("./Admin"))
import ScrollToTop from "./ScrollToTop"
import SkillForm from "./SkillForm"
import ThemeProvider from "./ThemeProvider"
import { AuthProvider } from "./AuthProvider"
import Counter from "./Counter"
import ProductsPage from "./ProductPage"
import UserPage from "./UserPage"
import PageLayout from "./PageLayout"
function App() {
  const location = useLocation()

  return (
    <>
      <AuthProvider>
        <ThemeProvider>
          <NavBar />
          <ErrorBoundary resetKeys={[location.pathname]}>
            <ScrollToTop />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/home" element={<Home />} />
              <Route
                path="/about"
                element={
                  <ProtectedRoute>
                    <RoleRoute allowedRoles={["ADMIN", "USER"]}>
                      <About />
                    </RoleRoute>
                  </ProtectedRoute>
                }
              />
              <Route path="/login" element={<Login />} />
              <Route
                path="/product"
                element={
                  <ProtectedRoute>
                    <RoleRoute allowedRoles={["ADMIN"]}>
                      <Product />
                    </RoleRoute>
                  </ProtectedRoute>
                }
              />
              <Route path="/product/:id" element={<Product />} />
              <Route
                path="/users"
                element={
                  <ProtectedRoute>
                    <RoleRoute allowedRoles={["USER"]}>
                      <Users />
                    </RoleRoute>
                  </ProtectedRoute>
                }
              />
              <Route
                path="/admin"
                element={
                  <Suspense fallback={<div>Loading...</div>}>
                    <Admin />
                  </Suspense>
                }
              />
              <Route path="/dashboard" element={<Dashboard />}>
                <Route index element={<h3>Overview</h3>} />
                <Route path="profile" element={<Profile />} />
                <Route path="settings" element={<Settings />} />
              </Route>

              <Route path="/logout" element={<Logout />} />
              <Route path="/skill-form" element={<SkillForm />} />
              <Route path="/counter" element={<Counter />} />
              <Route path="/product-page" element={<ProductsPage />} />
              <Route path="/user-page" element={<UserPage />} />
              <Route path="/page-layout" element={<PageLayout />} />
              <Route path="/unauthorized" element={<Unauthorized />} />
              <Route path="*" element={<h2>404 Not Found</h2>} />
            </Routes>
          </ErrorBoundary>
        </ThemeProvider>
      </AuthProvider>
    </>
  )
}
export default App
