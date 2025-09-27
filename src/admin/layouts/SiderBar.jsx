import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SideBar = ({ isCollapsed }) => {
  const [activeItem, setActiveItem] = useState('dashboard');
  const navigate = useNavigate();

  const menuItems = [
    {
      id: 'dashboard',
      title: 'Tableau de bord',
      icon: 'pi pi-home',
      path: '/admin/dashboard'
    },
    {
      id: 'gallery-photos',
      title: 'Galerie Photos',
      icon: 'pi pi-images',
      path: '/admin/gallery-photos'
    },
    {
      id: 'gallery-videos',
      title: 'Galerie Vidéos',
      icon: 'pi pi-video',
      path: '/admin/gallery-videos'
    },
    {
      id: 'advertising',
      title: 'Espace Publicitaire',
      icon: 'pi pi-megaphone',
      path: '/admin/advertising'
    },
    {
      id: 'documents',
      title: 'Documents',
      icon: 'pi pi-file-pdf',
      path: '/admin/documents'
    },
    {
      id: 'news',
      title: 'Brèves ONPR',
      icon: 'pi pi-bookmark',
      path: '/admin/news'
    }
  ];

  const handleItemClick = (item) => {
    setActiveItem(item.id);
    // console.log(`Navigation vers: ${item.path}`);
    navigate(item.path);
  };

  return (
    <div 
      className={`text-white vh-100 position-fixed top-0 start-0`}
      style={{
        width: isCollapsed ? '80px' : '280px',
        zIndex: 1000,
        transition: 'width 0.3s ease-in-out',
        backgroundColor: '#198754'
      }}
    >
      {/* Header de la sidebar */}
      <div className="p-3 border-bottom border-secondary">
        <div className="d-flex align-items-center">
          {!isCollapsed && (
            <>
             <div className='d-flex justify-content-center g-4'>
                <div className="bg-white rounded-circle d-flex align-items-center justify-content-center me-3" 
                   style={{width: '50px', height: '50px'}}>                   
                <img src='img/onpr_logo_transparent.png' height={'45px'}></img>
              </div>
              <div className='d-flex flex-column'>
                <h6 className="mb-0 fw-bold">O.N.P.R</h6>
                <small className="text-white">Administration</small>
              </div>
             </div>
              
            </>
          )}
          {isCollapsed && (
            <div className="w-100 d-flex justify-content-center">
              <div className="bg-white rounded-circle d-flex align-items-center justify-content-center" 
                   style={{width: '50px', height: '50px'}}>
                <img src='img/onpr_logo_transparent.png' height={'45px'}></img>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Menu de navigation */}
      <nav className="flex-grow-1 py-3">
        <div className="px-3">
          <ul className="list-unstyled">
            {menuItems.map((item) => (
              <li key={item.id} className="mb-1 ">
                <button
                  className={`btn w-100 text-start p-3 rounded-3 border-0 ${
                    activeItem === item.id 
                      ? 'bg-primary text-white' 
                      : 'text-white-50'
                  }`}
                  onClick={() => handleItemClick(item)}
                  style={{
                    backgroundColor: activeItem === item.id ? '' : 'transparent',
                    transition: 'all 0.2s ease'
                  }}                                  
                >
                  <i className={`${item.icon} me-3`} style={{fontSize: '1.2rem'}}></i>
                  {!isCollapsed && <span className="fw-semibold text-white">{item.title}</span>}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </nav>

    </div>
  );
};
export default SideBar;