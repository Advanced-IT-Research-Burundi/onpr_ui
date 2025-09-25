import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";


export default function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg bg-white">
      <div className="container">
        <a className="navbar-brand" href="#">
          <img
            src="/img/onpr_logo.jpg"
            alt="Logo"
            height="60"
          />
        </a>

        {/* Toggle button for mobile */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Menu links */}
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link text-success fw-semibold" href="#">
                Accueil
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-success fw-semibold" href="#">
                Informations
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-success fw-semibold" href="#">
                Annonces et Communiqués
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-success fw-semibold" href="#">
                Services en ligne
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-success fw-semibold" href="#">
                Contacts
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
