import React, { useEffect, useState } from "react";
import axios from "axios";
import ArticleCard from "../components/articleCard";

const ArticleList = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/articles")
      .then((res) => setArticles(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="container mt-4">
      <h2 className="mb-3">📑 Articles</h2>
      {articles.length === 0 ? (
        <div className="alert alert-info">Aucun article disponible.</div>
      ) : (
        articles.map((article) => (
          <ArticleCard key={article.id} article={article} />
        ))
      )}
    </div>
  );
};

export default ArticleList;
