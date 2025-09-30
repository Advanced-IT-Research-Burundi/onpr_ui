import React from "react";
import Footer from "./Footer";
import Button from "../components/Bouton";
import Card from "../components/Card";
import Layout from "./Layout";
import Hero from "../components/Hero";
import PostSlider from "../components/PostSlider";
import Sidebar from "./SiderBar";
import { Outlet } from "react-router-dom";

function HomeLayout() {
  return (
    <>
      <Hero />
      <div className="container-fluid p-5">
        <div className="row">
          <Outlet />
          <Sidebar />
        </div>
      </div>
    </>
  );
}

export default HomeLayout;
