import React from "react"
import { Link, Outlet } from "react-router-dom"

const NavBar = () => {
  return (
    <>
      <nav className="navbar">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/login">Login</Link>
        <Link to="/product">Product</Link>
        <Link to="/users">Users</Link>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/admin">Admin</Link>
        <Link to="/skill-form">Skill Form</Link>
        <Link to="/counter">Counter</Link>
        <Link to="/product-page">Product Page</Link>
        <Link to="/user-page">User Page</Link>
        <Link to="/page-layout">Page Layout</Link>
        <Link to="/logout">Logout</Link>
      </nav>
      <nav className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex h-16 items-center justify-between">
            <div className="text-xl font-bold text-blue-600">MyApp</div>
            <div className="absolute left-1/2 -translate-x-1/2 flex items-center gap-6">
              <a href="#" className="text-gray-600 hover:text-blue-600">
                Home
              </a>
              <a href="#" className="text-gray-600 hover:text-blue-600">
                About
              </a>
              <a href="#" className="text-gray-600 hover:text-blue-600">
                Users
              </a>

              <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Login</button>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}

export default NavBar
