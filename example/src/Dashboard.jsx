import React from "react"
import { Link, Outlet } from "react-router-dom"

const Dashboard = () => {
  return (
    <div>
      <nav>
        <Link to="/dashboard/profile">Profile</Link>
        <br />
        <Link to="/dashboard/settings">Settings</Link>
      </nav>
      <Outlet />
    </div>
  )
}

export default Dashboard
