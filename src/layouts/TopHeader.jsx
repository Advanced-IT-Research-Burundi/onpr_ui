import React from "react";

export default function TopBar() {
  return (
    <div className="bg-light py-2">
      <div className="container d-flex justify-content-between align-items-center">
        {/* Left side: Phone and Email */}
        <div className="d-flex align-items-center">
          <div className="d-flex align-items-center me-4">
            <i className="pi pi-phone"></i>
            <span>+257 22 27 62 29</span>
          </div>

          <div className="d-flex align-items-center">
            <i className="pi pi-envelope"></i>
            <span>onpr_burundi@onpr.bi</span>
          </div>
        </div>

        {/* Right side: Button */}
        <button className="btn btn-danger fw-bold">Se Connecter</button>
      </div>
    </div>
  );
}
