import React from "react"
import { Routes, Route } from "react-router-dom"
import Layout from "./layouts/Layout.jsx"
import HomeScreen from "./pages/HomeScreen.jsx"
import AboutScreen from "./pages/AboutScreen.jsx"

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/home" element={<HomeScreen />} />
        <Route path="/about" element={<AboutScreen />} />
      </Route>
    </Routes>
  )
}

export default App
