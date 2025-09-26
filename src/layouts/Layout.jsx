import React from "react"
import { Outlet } from "react-router-dom"
import Footer from "./Footer"
import Header from "./Header"
import TopHeader from "./TopHeader"
import Sidebar from "./SiderBar"

function Layout() {
  return (
    <div>
      <Header/>
      <Outlet />
      <Footer />
    </div>
  )
}

export default Layout
