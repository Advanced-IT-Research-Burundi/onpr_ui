import React, { useState } from "react";
import api from "../services/api";
import { Link } from "react-router-dom";

function ListeArticles() {
  const [data, setData] = useState();
  api.get("/articles/").then((response) => {
    setData(response.data);
    console.log(response.data);
  });

  return (
    <div className="col-9">
      {/* {JSON.stringify(data)} */}
      <h4 className="heading-section mb-4">Actualités récentes</h4>
      <div className="row">
        {data &&
          data.map((data, idx) => (
            <div className="col-3 mb-4" key={idx}>
              <div className="card" style={{ width: "18rem" }}>
                <img
                  src={
                    data.image_source_url || require("./img/placeholder.webp")
                  }
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title">{data.title}</h5>
                  <p className="card-text">{data.content}</p>
                  {data.id && <Link to={"./" + data.id}>Lire plus</Link>}
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default ListeArticles;
