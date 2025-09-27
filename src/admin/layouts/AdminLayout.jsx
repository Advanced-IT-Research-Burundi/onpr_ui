import React, { useState } from 'react';
import SideBar from './SiderBar.jsx';
import Header from './Header.jsx';
import { Outlet } from 'react-router-dom';

const AdminLayout = ({ children }) => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  const toggleSidebar = () => {
    setSidebarCollapsed(!sidebarCollapsed);
  };

  return (
    <>      

      <div className="d-flex">
        {/* Sidebar */}
        <SideBar 
          isCollapsed={sidebarCollapsed} 
          onToggleCollapse={toggleSidebar} 
        />

        {/* Contenu principal */}
        <div 
          className="flex-grow-1"
          style={{
            marginLeft: sidebarCollapsed ? '80px' : '280px',
            transition: 'margin-left 0.3s ease-in-out'
          }}
        >
          {/* Header */}
          <Header 
            onToggleSidebar={toggleSidebar} 
            sidebarCollapsed={sidebarCollapsed} 
          />

          {/* Zone de contenu */}
          <main 
            className="p-4"
            style={{
              marginTop: '70px',
              minHeight: 'calc(100vh - 70px)',
              backgroundColor: '#f8f9fa'
            }}
          >
            {children || (
              <Outlet />
            )}
          </main>
        </div>
      </div>
    </>
  );
};

export default AdminLayout;