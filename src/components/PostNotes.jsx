import React, { useState } from "react";
import api from "../services/api";

function PostNotes() {
  const [data, setData] = useState();
  api.get("/articles").then((response) => {
    setData(response.data);
  });

  console.log(data);
  return (
    <div className="col-9">
      {{ data }}
      <h4 className="heading-section mb-4">Actualités récentes</h4>
      <div className="row">
        {data.map((data, idx) => (
          <div className="col-3 mb-4" key={idx}>
            <div className="card" style={{ width: "18rem" }}>
              <img
                src={
                  data.url_image || require("../../assets/img/placeholder.webp")
                }
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">{data.title}</h5>
                <p className="card-text">{data.content}</p>
                {data.url && (
                  <a href={data.url} className="btn btn-link">
                    Lire plus
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PostNotes;
