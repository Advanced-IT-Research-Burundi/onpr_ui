import React from "react";
import "./NotFoundScreen.css";

function NotFoundScreen() {
  return (
    <div className="notfound-wrapper">
      <div className="notfound-box">
        <h1 className="notfound-code">404</h1>
        <h2 className="notfound-title">Page Not Found</h2>
        <p className="notfound-message">
          Sorry, the page you are looking for does not exist.
        </p>
        <a href="/" className="notfound-home">
          Go Home
        </a>
      </div>
    </div>
  );
}

export default NotFoundScreen;
