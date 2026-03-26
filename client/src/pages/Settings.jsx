import React from "react";
import { useParams } from "react-router-dom";

function JobDetails() {
  const { id } = useParams();

  return (
    <div className="container">
      <h1 className="fw-bold mb-4">Job Details</h1>
      <div className="card shadow-sm border-0 p-4">
        <p className="mb-0 text-muted">Viewing details for job ID: {id}</p>
      </div>
    </div>
  );
}

export default JobDetails;
