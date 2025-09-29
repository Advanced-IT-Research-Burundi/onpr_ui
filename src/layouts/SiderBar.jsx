import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../assets/styles/Sidebar.css';

const Sidebar = () => {
  const location = useLocation();
  
  const sidebarData = [
    {
      title: "DIRECTION GENERALE",
      items: [
        { name: "Secrétariat", path: "/secretariat" },
        { name: "Conseillers", path: "/conseillers" },
        { name: "Agences", path: "/agences" },
        { name: "Cellule Communication et Relations Publiques", path: "/communication" },
        { name: "Cellule Informatique", path: "/informatique" },
        { name: "Médecin Conseil", path: "/medecin" },
        { name: "Actuaire", path: "/actuaire" },
        { name: "Audit Interne", path: "/audit" },
        { name: "Bibliothèque et Archives", path: "/bibliotheque" }
      ]
    },
    {
      title: "DIRECTION ADMINISTRATIVE ET FINANCIERE",
      items: [
        { name: "Secrétariat", path: "/admin/secretariat" },
        { name: "Service du Personnel et Logistique", path: "/admin/personnel" },
        { name: "Service de Recouvrement", path: "/admin/recouvrement" },
        { name: "Service Comptabilité", path: "/admin/comptabilite" },
        { name: "Service Budget", path: "/admin/budget" }
      ]
    },
    {
      title: "DIRECTION DES PRESTATIONS",
      items: [
        { name: "Secrétariat", path: "/prestations/secretariat" },
        { name: "Service des Pensions", path: "/prestations/pensions" },
        { name: "Service des Risques Professionnels", path: "/prestations/risques" }
      ]
    }
  ];

  return (
    <div className="sidebar-container bg-light col-3">
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container-fluid flex-column align-items-stretch">
          {sidebarData.map((section, index) => (
            <div key={index} className="sidebar-section w-100">
              <h6 className="sidebar-title px-3 py-2 mb-0 bg-primary text-white fw-bold">
                {section.title}
              </h6>
              <ul className="navbar-nav flex-column w-100">
                {section.items.map((item, itemIndex) => {
                  const isActive = location.pathname === item.path;
                  return (
                    <li key={itemIndex} className="nav-item">
                      <Link 
                        to={item.path}
                        className={`nav-link sidebar-link px-3 py-2 text-decoration-none ${
                          isActive ? 'active' : 'text-dark'
                        }`}
                      >
                        {item.name}
                        {isActive && <span className="visually-hidden">(current)</span>}
                      </Link>
                    </li>
                  );
                })}
              </ul>
              {index < sidebarData.length - 1 && <div className="my-2"></div>}
            </div>
          ))}
        </div>
      </nav>
    </div>
  );
};

export default Sidebar;