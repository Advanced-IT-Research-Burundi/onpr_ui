import React from "react";
import { Link } from "react-router-dom";

const InformationCard = ({ information }) => {
  return (
    <div className="card mb-3 shadow-sm">
      <div className="card-body">
        <h5 className="card-title">{information.title}</h5>
        <p className="card-text text-muted">
          {information.description_en
            ? information.description_en.slice(0, 150) + "..."
            : "Read more"}
        </p>
        <Link
          to={`/informations/${information.id}`}
          className="btn btn-primary btn-sm"
        >
          Lire plus
        </Link>
      </div>
    </div>
  );
};

export default InformationCard;
