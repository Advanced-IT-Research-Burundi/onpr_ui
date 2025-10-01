import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./layouts/Layout.jsx";
import HomeLayout from "./layouts/HomeLayout.jsx";
import AboutScreen from "./pages/AboutScreen.jsx";
import AnnouncementsScreen from "./pages/AnnouncementsScreen.jsx";
import NotFoundScreen from "./pages/NotFoundScreen.jsx";
import SignInScreen from "./pages/SignInScreen.jsx";
import InfoScreen from "./pages/InfoScreen.jsx";
import ContactScreen from "./pages/ContactScreen.jsx";
import OnlineServicesScreen from "./pages/OnlineServicesScreen.jsx";
import PostNotes from "./components/ListeArticles.jsx";
import Secretariat from "./pages/secretariat.jsx";
import BlogPost from "./layouts/ArticleDetail.jsx";
import ArticleList from "./layouts/ArticleList.jsx";
import ListeArticles from "./components/ListeArticles.jsx";
import ListeAnnonces from "./components/ListeAnnonces.jsx";
import AnnonceDetail from "./layouts/AnnonceDetail.jsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/home/" element={<HomeLayout />}>
          <Route path="actualites" element={<ListeArticles />} />
          <Route path="annonces" element={<ListeAnnonces />} />
          <Route path="secretariat" element={<Secretariat />} />
          <Route path="articles" element={<ArticleList />} />
          <Route path="actualites/:id" element={<BlogPost />} />
          <Route path="annonces/:id" element={<AnnonceDetail />} />
        </Route>
        <Route path="about" element={<AboutScreen />} />
        <Route path="informations" element={<InfoScreen />} />
        <Route path="online-services" element={<OnlineServicesScreen />} />
        <Route path="announcements" element={<AnnouncementsScreen />} />
        <Route path="contact" element={<ContactScreen />} />
        <Route path="signin" element={<SignInScreen />} />
        <Route path="*" element={<NotFoundScreen />} />
      </Route>
    </Routes>
  );
}

export default App;
