import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "primeicons/primeicons.css";
import { Link } from "react-router-dom";

export default function Contact() {
  return (
    <div className="container py-5" style={{ backgroundColor: "#ffffff" }}>
      <div className="row">
        {/* Left Column - Contact Info */}
        <div className="col-md-6 mb-4">
          <h2 className="fw-bold mb-3 text-dark">Contactez-Nous</h2>
          <p className="text-dark">
            Pour toute information ou demande, veuillez nous contacter via les
            coordonnées ci-dessous.
          </p>

          <div className="row g-3 mt-4">
            <div className="col-12 col-sm-6">
              <div className="d-flex justify-content-start align-items-start-0">
                <span
                  className="pi pi-map-marker fs-3 me-2"
                  style={{ color: "#198754" }}
                  aria-label="Adresse"
                ></span>
                <div>
                  <h6 className="fw-bold mb-1">Adresse</h6>
                  <p className="mb-0">
                    Quartier ROHERO I <br />
                    Chaussée du P.L.RWAGASORE, N°187
                  </p>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-6">
              <div className="d-flex justify-content-start align-items-start-0">
                <span
                  className="pi pi-phone fs-3 me-2"
                  style={{ color: "#198754" }}
                  aria-label="Téléphone"
                ></span>
                <div>
                  <h6 className="fw-bold mb-1">Téléphone</h6>
                  <p className="mb-0">(+257) 22 27 6229</p>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-6">
              <div className="d-flex justify-content-start align-items-start-0">
                <span
                  className="pi pi-envelope fs-3 me-2"
                  style={{ color: "#198754" }}
                  aria-label="Email"
                ></span>
                <div>
                  <h6 className="fw-bold mb-1">Email</h6>
                  <p className="mb-0">
                    onpr_burundi@onpr.bi <br />
                    onpr_burundi@yahoo.fr
                  </p>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-6">
              <div className="d-flex justify-content-start align-items-start-0">
                <span
                  className="pi pi-globe fs-3 me-2"
                  style={{ color: "#198754" }}
                  aria-label="Site Web"
                ></span>
                <div>
                  <h6 className="fw-bold mb-1">Site Web</h6>
                  <p className="mb-0">www.onpr.bi</p>
                </div>
              </div>
            </div>
          </div>

          <h6 className="fw-bold my-3">Réseaux Sociaux</h6>
          <div
            className="d-flex gap-5 justify-content-around
          mt-2"
            style={{ maxWidth: "100px" }}
          >
            <Link to="https://www.facebook.com/onpr.bi">
              <span
                className="pi pi-facebook fs-4"
                style={{ color: "#198754" }}
                aria-label="Facebook"
              ></span>
            </Link>
            <Link to="https://twitter.com/onpr_bi">
              <span
                className="pi pi-twitter fs-4"
                style={{ color: "#198754" }}
                aria-label="Twitter"
              ></span>
            </Link>
            <Link to="https://www.instagram.com/onpr.bi">
              <span
                className="pi pi-instagram fs-4"
                style={{ color: "#198754" }}
                aria-label="Instagram"
              ></span>
            </Link>
          </div>
        </div>

        {/* Right Column - Contact Form */}
        <div className="col-md-6">
          <div className="p-4 rounded" style={{ backgroundColor: "#eeeeee" }}>
            <form>
              <div className="row">
                <div className="col-md-6 mb-3">
                  <label className="form-label">Nom</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Votre nom"
                  />
                </div>
                <div className="col-md-6 mb-3">
                  <label className="form-label">Email</label>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Votre email"
                  />
                </div>
              </div>

              <div className="mb-3">
                <label className="form-label">Téléphone</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Votre téléphone"
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Message</label>
                <textarea
                  className="form-control"
                  rows="4"
                  placeholder="Votre message"
                ></textarea>
              </div>

              <button
                type="submit"
                className="btn w-100"
                style={{ backgroundColor: "#198754", color: "#ffffff" }}
              >
                Envoyer le message
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Map */}
      <div className="mt-5">
        <iframe
          title="Google Maps"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.051236387675!2d29.364403!3d-3.382187!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19c18f7fb6b6d3a1%3A0x4769f8f6d94ac648!2sONPR%20-%20Office%20National%20de%20la%20Pr%C3%A9voyance%20Sociale!5e0!3m2!1sfr!2sbi!4v1664820000000!5m2!1sfr!2sbi"
          width="100%"
          height="300"
          style={{ border: "0" }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
}
