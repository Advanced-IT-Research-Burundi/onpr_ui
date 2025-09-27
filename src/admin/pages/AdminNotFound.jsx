import React from 'react';
import { Link } from 'react-router-dom';

const AdminNotFound = () => {
  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="text-center p-4">
        <div className="card-body">
          <i className="pi pi-exclamation-triangle" style={{ fontSize: '3rem', color: '#f39c12' }}></i>
          <h2 className="mt-3">Page introuvable</h2>
          <p className="text-muted">
            Cette page n'existe pas dans l'espace d'administration ou a été déplacée.
          </p>
          <Link to="/admin/dashboard" className="btn btn-primary mt-3">
            <i className="pi pi-home me-2"></i> Retour au tableau de bord
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AdminNotFound;
