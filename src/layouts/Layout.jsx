import React from "react"
import { Outlet } from "react-router-dom"
import Header from "./Header"
import SubHeader from "./TopHeader"

function Layout() {
  return (
    <div>
      <SubHeader/>
      <Header/>
      <h1>My App</h1>
      <Outlet />
    </div>
  )
}

export default Layout
