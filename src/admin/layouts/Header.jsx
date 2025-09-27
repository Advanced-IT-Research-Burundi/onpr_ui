import React, { useState } from 'react';
import { useAuth } from '../../context/AuthContext.jsx';

const Header = ({ onToggleSidebar, sidebarCollapsed }) => {
  const [showProfile, setShowProfile] = useState(false);

  const { logout } = useAuth();

   const handleLogout = () => {
    logout();
    setShowProfile(false);
  };

  return (
    <header 
      className="bg-white border-bottom shadow-sm position-fixed top-0"
      style={{
        width: sidebarCollapsed ? 'calc(100% - 80px)' : 'calc(100% - 280px)',
        zIndex: 999,
        transition: 'all 0.3s ease-in-out',
        height: '70px'
      }}
    >
      <div className="d-flex align-items-center justify-content-between h-100 px-4">
        
        {/* Section gauche - Toggle + Titre */}
        <div className="d-flex align-items-center">
          <button
            className="btn btn-outline-secondary border-0 me-3 d-flex align-items-center justify-content-center"
            onClick={onToggleSidebar}
            style={{width: '40px', height: '40px'}}
          >
            <i className="pi pi-bars"></i>
          </button>
          
          <div>
            <h4 className="mb-0 text-primary fw-bold">O.N.P.R</h4>
            <small className="text-muted">Office National de la Presse et de la Radio</small>
          </div>
        </div>

        {/* Section droite - Profil utilisateur */}
        <div className="dropdown">
          <button
            className="btn btn-link border-0 p-0 d-flex align-items-center"
            onClick={() => setShowProfile(!showProfile)}
          >
            <img 
              src="img/onpr_logo_transparent.png" 
              alt="Admin" 
              className="rounded-circle me-2"
              width="40" 
              height="40"
            />
            <div className="text-start">
              <div className="fw-semibold text-dark">Administrateur</div>
              <small className="text-muted">ONPR Admin</small>
            </div>
            <i className="pi pi-chevron-down ms-2 text-muted"></i>
          </button>

          {showProfile && (
            <div className="dropdown-menu dropdown-menu-end show shadow-lg border-0 rounded-3 mt-2" 
                 style={{width: '200px'}}>
              <div className="dropdown-header">
                <div className="d-flex align-items-center">
                  <img 
                    src="img/onpr_logo_transparent.png" 
                    alt="Admin" 
                    className="rounded-circle me-3"
                    width="50" 
                    height="50"
                  />
                  <div>
                    <div className="fw-bold">ONPR</div>
                    <small className="text-muted">admin@onpr.gov.bi</small>
                  </div>
                </div>
              </div>
              <div className="dropdown-divider"></div>
              
             
              
              <button className="dropdown-item py-2 text-danger" onClick={handleLogout}>
                <i className="pi pi-sign-out me-3"></i>Déconnexion
              </button>
            </div>
          )}
        </div>

        {/* Overlay pour fermer le dropdown */}
        {showProfile && (
          <div 
            className="position-fixed top-0 start-0 w-100 h-100"
            style={{zIndex: -1}}
            onClick={() => setShowProfile(false)}
          ></div>
        )}
      </div>
    </header>
  );
};

export default Header;
