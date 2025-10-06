import React from "react";
import { Link } from "react-router-dom";

const AnnonceCard = ({ annonce }) => {
  return (
    <div className="card mb-3 shadow-sm">
      <div className="card-body">
        <h5 className="card-title">{annonce.title}</h5>
        <p className="card-text text-muted">
          {annonce.description_en
            ? annonce.description_en.slice(0, 150) + "..."
            : "Read more"}
        </p>
        <Link to={`/annonces/${annonce.id}`} className="btn btn-primary btn-sm">
          Lire plus
        </Link>
      </div>
    </div>
  );
};

export default AnnonceCard;
