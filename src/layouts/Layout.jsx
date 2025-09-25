import React from "react"
import { Outlet } from "react-router-dom"

function Layout() {
  return (
    <div>
      <SubHeader/>
      <Header/>
      <h1>My App</h1>
      <Outlet />
      <Footer />
      
    </div>
  )
}

export default Layout
