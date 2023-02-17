import React from "react";
import { Link } from "react-router-dom";

export default () => (
  <div className="vw-100 vh-100 primary-color d-flex align-items-center justify-content-center">
    <div className="jumbotron jumbotron-fluid bg-transparent">
      <div className="container secondary-color">
        <h1 className="display-4">Referrals</h1>
        <p className="lead">
          Your Referrals
        </p>
        <hr className="my-4" />
        <Link
          to="/referrals"
          className="btn btn-lg custom-button"
          role="button"
        >
          View Referrals
        </Link>
      </div>
    </div>
  </div>
);
