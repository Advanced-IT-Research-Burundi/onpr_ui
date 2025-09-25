import React from "react"
import { Outlet } from "react-router-dom"
import Footer from "./Footer"
import Header from "./Header"
import TopHeader from "./TopHeader"
import Sidebar from "./SiderBar"

function Layout() {
  return (
    <div>
      <TopHeader/>
      <Header/>
            <Sidebar/>

      <h1>My App</h1>
      <Outlet />
      <Footer />
      
    </div>
  )
}

export default Layout
