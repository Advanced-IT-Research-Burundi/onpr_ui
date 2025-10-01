import React from "react";
import { Link } from "react-router-dom";

const ArticleCard = ({ article }) => {
  return (
    <div className="card mb-3 shadow-sm">
      <div className="card-body">
        <h5 className="card-title">{article.title}</h5>
        <p className="card-text text-muted">
          {article.description_en
            ? article.description_en.slice(0, 150) + "..."
            : "Read more"}
        </p>
        <Link to={`/articles/${article.id}`} className="btn btn-primary btn-sm">
          Lire plus
        </Link>
      </div>
    </div>
  );
};

export default ArticleCard;
