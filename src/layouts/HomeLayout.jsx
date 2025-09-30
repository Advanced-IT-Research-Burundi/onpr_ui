import React from "react";
import Footer from "./Footer";
import Button from "../components/Bouton";
import Card from "../components/Card";
import Layout from "./Layout";
import Hero from "../components/Hero";
import PostSlider from "../components/PostSlider";
import Carrousel from "../components/Carrousel";
import PostCard from "../components/PostCard";
import Sidebar from "../layouts/SiderBar";
import { Outlet } from "react-router-dom";

function HomeLayout() {
  return (
    <div className="container-fluid">
      <Carrousel />

      <Outlet />
      <Sidebar />
    </div>
  );
}

export default HomeLayout;
