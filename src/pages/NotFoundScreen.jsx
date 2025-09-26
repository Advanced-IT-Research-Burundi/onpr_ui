import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function NotFoundScreen() {
  return (
    <div
      className="d-flex align-items-center justify-content-center bg-light"
      style={{ minHeight: "80vh" }}
    >
      <div
        className="card shadow-lg p-4"
        style={{ maxWidth: "400px", width: "100%", borderRadius: "16px" }}
      >
        <h1 className="display-3 text-success mb-3">404</h1>
        <h2 className="h4 text-dark mb-2">Page non trouvée</h2>
        <p className="text-success mb-4">
          Désolé, la page que vous recherchez n'existe pas.
        </p>
        <a href="/" className="btn btn-success btn-lg w-100 fw-bold">
          Retour à l'accueil
        </a>
      </div>
    </div>
  );
}

export default NotFoundScreen;
