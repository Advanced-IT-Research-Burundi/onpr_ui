import React from "react";

function PostNotes() {
  return (
    <div className="col-9">
      <h4 className="heading-section  mb-4">Actualités récentes</h4>
      <div className="row">
        <div className="col-3">
          <div className="card" style={{ width: "18rem" }}>
            <img
              src={"../../img/placeholder.webp"}
              className="card-img-top"
              alt="..."
            />
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
  );
}

export default PostNotes;
