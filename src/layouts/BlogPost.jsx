import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

const BlogPost = () => {
  const { id } = useParams();
  const [article, setArticle] = useState(null);

  useEffect(() => {
    axios
      .get(`http://127.0.0.1:8000/api/articles/${id}`)
      .then((res) => setArticle(res.data))
      .catch((err) => console.error(err));
  }, [id]);

  if (!article)
    return <div className="container mt-4 alert alert-info">Chargement...</div>;

  return (
    <div className="container mt-4">
      <h2 className="mb-3">{article.title}</h2>
      {/* Safely render HTML content */}
      <div
        className="card p-3"
        dangerouslySetInnerHTML={{ __html: article.body }}
      ></div>
      <Link to="/home/actualites" className="btn btn-secondary mt-3">
        ⬅ Retour
      </Link>
    </div>
  );
};

export default BlogPost;
