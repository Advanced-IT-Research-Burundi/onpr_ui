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
          <div className="site-mobile-menu-close my-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="currentColor"
              className="bi bi-x-lg"
              viewBox="0 0 16 16"
            >
              <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z" />
            </svg>
          </div>
        </div>
        <div className="site-mobile-menu-body"></div>
      </div>

      <div className="top-bar">
        <div className="container">
          <div className="row">
            <div className="col-12 d-flex justify-content-end align-items-center py-2">
              <div className="d-none d-md-inline-block">
                <a href="#" className="">
                  <i className="pi pi-envelope"></i>{" "}
                  <span className="d-none d-md-inline-block">
                    info@yourdomain.com
                  </span>
                </a>
                <span className="mx-md-2 d-inline-block"></span>
                <a href="#" className="">
                  <i className="pi pi-phone"></i>{" "}
                  <span className="d-noe h6 d-md-inline-block">
                    1+ (234) 5678 9101
                  </span>
                </a>
              </div>

              <div className="d-flex h6 mb-0">
                <div>
                  <a href="#" className="">
                    <i className="pi pi-twitter"></i>{" "}
                    <span className="d-inline-block">Twitter</span>
                  </a>
                  <span className="mx-2 d-inline-block"></span>
                  <a href="#" className="">
                    <i className="pi pi-facebook"></i>{" "}
                    <span className="d-inline-block">Facebook</span>
                  </a>
                </div>
                <div className="px-2">|</div>
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
        <div className="container-fluid">
          <div className="d-flex justify-content-between align-items-center">
            <div className="site-logo">
              <a href="index.html" className="text-black">
                <img src={logo} alt="Image" width="80" className="img-fluid" />
              </a>
            </div>

            <div className="">
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
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="35"
                  height="35"
                  fill="currentColor"
                  class="bi bi-list"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
