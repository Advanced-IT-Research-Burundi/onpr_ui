import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import placeholder from "/img/placeholder.webp";
import posts from "../../posts.json";

function PostCard() {
  const data = posts.find(
    (item) =>
      item.title ===
      "Assemblée générale du personnel de l’Office National des Pensions et Risques Professionnels des Fonctionnaires, des Magistrats et des Agents de l’ordre Judiciaire"
  );

  console.log(data);
  return (
    <div className="row">
      <div className="col-9 py-5">
        <div className="row">
          <div className="col-3">
            <div className="card" style={{ width: "18rem" }}>
              <img src={placeholder} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card’s content.
                </p>
                <a href="#" className="btn btn-link">
                  Lire plus
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PostCard;
