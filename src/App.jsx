import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./layouts/Layout.jsx";
import HomeLayout from "./layouts/HomeLayout.jsx";
import AboutScreen from "./pages/AboutScreen.jsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/home" element={<HomeLayout />}>
          <Route path="./about" element={<AboutScreen />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
