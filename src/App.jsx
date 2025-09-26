import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./layouts/Layout.jsx";
import HomeLayout from "./layouts/HomeLayout.jsx";
import AboutScreen from "./pages/AboutScreen.jsx";
import './App.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomeLayout />} />
        <Route path="/about" element={<AboutScreen />} />
      </Route>
    </Routes>
  );
}

export default App;
