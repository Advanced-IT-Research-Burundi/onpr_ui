import React from "react"
import { Outlet } from "react-router-dom"
import Footer from "./Footer"
function Layout() {
  return (
    <div>
      <h1>My App</h1>
      <Outlet />
      <Footer />
    </div>
  )
}

export default Layout
