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
import LoginScreen from "./admin/pages/LoginScreen.jsx";
import Admin from "./admin/Admin.jsx";
import { AuthProvider } from "./context/AuthContext.jsx";

function App() {
  return (
    <AuthProvider>
        <Routes>
        {/* Routes publiques */}
        <Route path="/" element={<Layout />}>
          <Route index element={<HomeLayout />} />
          <Route path="home" element={<HomeLayout />} />
          <Route path="about" element={<AboutScreen />} />
          <Route path="informations" element={<InfoScreen />} />
          <Route path="online-services" element={<OnlineServicesScreen />} />
          <Route path="announcements" element={<AnnouncementsScreen />} />
          <Route path="contact" element={<ContactScreen />} />
          <Route path="signin" element={<SignInScreen />} />
          <Route path="*" element={<NotFoundScreen />} />
        </Route>
        
        {/* Route de connexion admin (sans layout) */}
        <Route path="/login" element={<LoginScreen />} />
        
        {/* Routes admin protégées */}
        <Route path="/admin/*" element={<Admin />} />
      </Routes>
    </AuthProvider>
  
  );
}

export default App;
