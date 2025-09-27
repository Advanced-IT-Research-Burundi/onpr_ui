import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ProtectedRoute from './layouts/ProtectedRoute.jsx';

// Import des pages admin
import DashboardScreen from './pages/DashboardScreen.jsx';
import GalleryPhotosScreen from './pages/GalleryPhotosScreen.jsx';
import GalleryVideosScreen from './pages/GalleryVideosScreen.jsx';
import AdvertisingScreen from './pages/AdvertisingScreen.jsx';
import DocumentsScreen from './pages/DocumentsScreen.jsx';
import NewsScreen from './pages/NewsScreen.jsx';
import AdminNotFound from './pages/AdminNotFound.jsx'; 

const adminRoutes = [
  { path: '/', component: <DashboardScreen /> },
  { path: '/dashboard', component: <DashboardScreen /> },
  { path: '/gallery-photos', component: <GalleryPhotosScreen /> },
  { path: '/gallery-videos', component: <GalleryVideosScreen /> },
  { path: '/advertising', component: <AdvertisingScreen /> },
  { path: '/documents', component: <DocumentsScreen /> },
  { path: '/news', component: <NewsScreen /> }
];

const Admin = () => {
  return (
    <Routes>
      {adminRoutes.map(({ path, component }, index) => (
        <Route
          key={index}
          path={path}
          element={<ProtectedRoute>{component}</ProtectedRoute>}
        />
      ))}

      <Route
        path="*"
        element={
          <ProtectedRoute>
            <AdminNotFound />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
};

export default Admin;
