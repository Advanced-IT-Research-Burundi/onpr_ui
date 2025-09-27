import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "primeicons/primeicons.css";
function OnlineServicesScreen() {
  const documents = [
    {
      category: "Décret et Lois",
      items: [
        "Lois de Décret",
        "Ordonnances",
        "Valeur d’achat et valeur de service du point de retraite pour l’année 2015",
        "Valeur d’achat et valeur de service du point de retraite pour l’année 2014",
        "Valeur d’achat et valeur de service du point de retraite pour l’année 2012",
        "Valeur d’achat et valeur de service du point de retraite pour l’année 2011",
      ],
    },
    {
      category: "Formulaires",
      items: [
        "Formulaire de déclaration pour les Détachés",
        "Formulaire pour les Risques Professionnels",
        "Déclaration de maladie professionnelle par l’employeur (Modèle M2)",
        "Déclaration de maladie professionnelle par l’employeur (Modèle M1)",
        "Déclaration d’accident par l’employeur (Modèle A1)",
        "Déclaration d'accident de travail et de trajet (Modèle A2)",
        "Formulaires pour pension",
        "Formulaire de demande de la pension",
      ],
    },
    {
      category: "Décisions & Règlements",
      items: [
        "Décisions du Conseil d'Administration",
        "Décision portant fixation des frais de transport de la victime d’accident",
        "Décision portant fixation des frais funéraires",
        "Règlement des Prestations",
      ],
    },
    {
      category: "Conventions",
      items: [
        "Convention ONPR-INSS",
        "Protocole d'accord entre l'ONPR et la MFP",
      ],
    },
  ];

  return (
    <div className="container py-5" style={{ backgroundColor: "#ffffff" }}>
      <h2 className="fw-bold mb-4" style={{ color: "#000000" }}>
        Téléchargements
      </h2>

      {documents.map((section, index) => (
        <div key={index} className="mb-5">
          <h4
            className="fw-bold p-2"
            style={{ backgroundColor: "#eeeeee", color: "#000000" }}
          >
            {section.category}
          </h4>

          <table className="table table-striped table-hover shadow-sm">
            <thead style={{ backgroundColor: "#198754", color: "#ffffff" }}>
              <tr>
                <th style={{ width: "70%" }}>Document</th>
                <th className="text-center">Type</th>
                <th className="text-center">Action</th>
              </tr>
            </thead>
            <tbody>
              {section.items.map((doc, i) => (
                <tr key={i}>
                  <td>{doc}</td>
                  <td className="text-center">
                    <i
                      className="pi pi-file-pdf"
                      style={{ fontSize: "1.2rem", color: "#dc3545" }}
                    ></i>{" "}
                    PDF
                  </td>
                  <td className="text-center">
                    <button
                      className="btn btn-sm"
                      style={{ backgroundColor: "#198754", color: "#ffffff" }}
                    >
                      <i className="pi pi-download me-1"></i> Télécharger
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ))}
    </div>
  );
}
export default OnlineServicesScreen;
