import React from "react";

function Dashboard() {
  return (
    <div className="container">
      <h1 className="fw-bold mb-4">Dashboard</h1>

      <div className="row g-4">
        <div className="col-md-4">
          <div className="card shadow-sm border-0 p-3">
            <h4 className="fw-bold">12</h4>
            <p className="text-muted mb-0">Saved Jobs</p>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card shadow-sm border-0 p-3">
            <h4 className="fw-bold">5</h4>
            <p className="text-muted mb-0">Applications Sent</p>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card shadow-sm border-0 p-3">
            <h4 className="fw-bold">3</h4>
            <p className="text-muted mb-0">Interviews</p>
          </div>
        </div>
      </div>

      <div className="card shadow-sm border-0 mt-4 p-4">
        <h3 className="fw-bold mb-3">Welcome to Job Hunter Tracker</h3>
        <p className="text-muted mb-0">
          Track your job search progress, save promising jobs, and stay
          organized during your application journey.
        </p>
      </div>
    </div>
  );
}

export default Dashboard;
