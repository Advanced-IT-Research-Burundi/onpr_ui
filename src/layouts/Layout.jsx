import React from "react"
import { Outlet } from "react-router-dom"
import Footer from "./Footer"
import Hero from "../components/Hero"
function Layout() {
  return (
    <div>
      <h1>My App</h1>
      <Hero />
      <Outlet />
      <Footer />
      
    </div>
  )
}

export default Layout
