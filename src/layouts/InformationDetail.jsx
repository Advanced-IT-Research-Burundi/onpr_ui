import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import api from "../api"; // Adjust the import path as necessary

const InformationDetail = () => {
  const { id } = useParams();
  const [information, setInformation] = useState(null);

  useEffect(() => {
    api
      .get(`/informations/${id}`)
      .then((res) => setInformation(res.data))
      .catch((err) => console.error(err));
  }, [id]);

  if (!information)
    return <div className="container mt-4 alert alert-info">Chargement...</div>;

  return (
    <div className="container mt-4">
      <h2 className="mb-3">{information.title}</h2>
      {/* Safely render HTML content */}
      <div
        className="card p-3"
        dangerouslySetInnerHTML={{ __html: information.body }}
      ></div>
      <Link to="/home/actualites" className="btn btn-secondary mt-3">
        ⬅ Retour
      </Link>
    </div>
  );
};

export default InformationDetail;
