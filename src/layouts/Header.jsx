import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "../assets/styles/header.css";
import "../assets/scripts/main";
import $ from "jquery";
import "jquery-sticky";
import logo from "/img/onpr_logo_transparent.png";

export default function Header() {
  useEffect(() => {
    // Initialize sticky header
    $(".js-sticky-header").sticky({ topSpacing: 0 });
  }, []);
  return (
    <>
      <div className="site-mobile-menu site-navbar-target">
        <div className="site-mobile-menu-header">
          <div className="site-mobile-menu-close mt-3">
            <span className="icon-close2 js-menu-toggle"></span>
          </div>
        </div>
        <div className="site-mobile-menu-body"></div>
      </div>

      <div className="top-bar">
        <div className="container">
          <div className="row">
            <div className="col-12 d-flex justify-content-between py-2">
              <div>
                <a href="#" className="">
                  <i className="pi pi-envelope"></i>{" "}
                  <span className="d-none d-md-inline-block">
                    info@yourdomain.com
                  </span>
                </a>
                <span className="mx-md-2 d-inline-block"></span>
                <a href="#" className="">
                  <i className="pi pi-phone"></i>{" "}
                  <span className="d-none d-md-inline-block">
                    1+ (234) 5678 9101
                  </span>
                </a>
              </div>

              <div className="d-flex">
                <div>
                  <a href="#" className="">
                    <i className="pi pi-twitter"></i>{" "}
                    <span className="d-none d-md-inline-block">Twitter</span>
                  </a>
                  <span className="mx-md-2 d-inline-block"></span>
                  <a href="#" className="">
                    <i className="pi pi-facebook"></i>{" "}
                    <span className="d-none d-md-inline-block">Facebook</span>
                  </a>
                </div>
                <div className="px-3">|</div>
                <div>
                  <a href="" className="text-primary">
                    Se connecter
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <header
        className="site-navbar shadow-sm js-sticky-header site-navbar-target"
        role="banner"
      >
        <div className="container">
          <div className="d-flex justify-content-between align-items-center">
            <div className="site-logo">
              <a href="index.html" className="text-black">
                <img src={logo} alt="Image" width="80" className="img-fluid" />
              </a>
            </div>

            <div className="col-12">
              <nav
                className="site-navigation text-right ml-auto "
                role="navigation"
              >
                <ul className="site-menu main-menu js-clone-nav ml-auto d-none d-lg-block">
                  <li>
                    <Link to="/home" className="nav-link">
                      Accueil
                    </Link>
                  </li>
                  <li>
                    <Link to="/informations" className="nav-link">
                      Informations
                    </Link>
                  </li>
                  <li>
                    <Link to="/announcements" className="nav-link">
                      Annonces et Communiqués
                    </Link>
                  </li>
                  {/* <li>
                    <Link to="/about" className="nav-link">
                      À propos
                    </Link>
                  </li> */}
                  <li>
                    <Link to="/online-services" className="nav-link">
                      Services en ligne
                    </Link>
                  </li>
                  <li>
                    <Link to="/contact" className="nav-link">
                      Contactez-nous
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>

            <div className="toggle-button d-inline-block d-lg-none">
              <a
                href="#"
                className="site-menu-toggle py-5 js-menu-toggle text-black"
              >
                <span className="icon-menu h3"></span>
              </a>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
