import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext.jsx';
import AdminLayout from './AdminLayout.jsx';


const ProtectedRoute = ({ children }) => {
  const { isAuthenticated } = useAuth();
 
  return isAuthenticated ? (
    <AdminLayout>
      {children}
    </AdminLayout>
  ) : (
    <Navigate to="/login" replace />
  );
};

export default ProtectedRoute;