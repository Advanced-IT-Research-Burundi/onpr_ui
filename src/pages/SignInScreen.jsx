import React, { useState } from "react";
import axios from "axios";

export default function SignIn() {
  // React state for storing form values and UI feedback
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // Function triggered when the form is submitted
  const handleSubmit = async (e) => {
    e.preventDefault(); // stops page refresh
    if (!email || !password) {
      setError("Please enter email and password");
      return;
    }
    setIsLoading(true);

    try {
      // Send login request to backend
      const response = await axios.post("login", {
        email,
        password,
      });

      // Save token and user in local storage
      localStorage.setItem("token", response.data.access_token);
      localStorage.setItem("user", JSON.stringify(response.data.data));

      setIsLoading(false);
      window.location.href = "/admin"; // redirect
    } catch (err) {
      setError(err?.response?.data?.message || "Login failed");
      setIsLoading(false);
    }
  };

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="col-md-4">
        <div className="card shadow p-4">
          <h2 className="text-center mb-4">Se Connecter</h2>

          {/* Error message */}
          {error && (
            <div className="alert alert-danger" role="alert">
              {error}
            </div>
          )}

          {/* Loading spinner */}
          {isLoading && (
            <div className="text-center mb-3">
              <div className="spinner-border text-primary" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            </div>
          )}

          {/* Login Form */}
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                className="form-control"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input
                type="password"
                id="password"
                className="form-control"
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <button
              type="submit"
              className="btn btn-success w-100"
              disabled={isLoading}
            >
              Connexion
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
