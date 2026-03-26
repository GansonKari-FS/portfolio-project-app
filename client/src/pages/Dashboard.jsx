import React, { useEffect, useState } from "react";
import { getSavedJobs } from "../utils/storage";

function Dashboard() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    setJobs(getSavedJobs());
  }, []);

  const saved = jobs.length;
  const applied = jobs.filter((job) => job.status === "Applied").length;
  const interviews = jobs.filter((job) => job.status === "Interview").length;

  const getBadgeClass = (status) => {
    if (status === "Applied") return "badge-soft badge-applied";
    if (status === "Interview") return "badge-soft badge-interview";
    return "badge-soft badge-saved";
  };

  return (
    <div className="page-shell">
      <h1 className="fw-bold mb-2">Dashboard</h1>
      <p className="hero-note">
        Track your saved roles, monitor application progress, and stay
        organized.
      </p>

      <div className="row g-4 mb-4">
        <div className="col-md-4">
          <div className="card border-0 p-4 text-center stat-card">
            <div>
              <div className="stat-number">{saved}</div>
              <div className="stat-label">Saved Jobs</div>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card border-0 p-4 text-center stat-card">
            <div>
              <div className="stat-number">{applied}</div>
              <div className="stat-label">Applications Sent</div>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card border-0 p-4 text-center stat-card">
            <div>
              <div className="stat-number">{interviews}</div>
              <div className="stat-label">Interviews</div>
            </div>
          </div>
        </div>
      </div>

      <div className="card border-0 p-4">
        <h4 className="section-title">Recently Saved Jobs</h4>

        {jobs.length === 0 ? (
          <div className="empty-state">
            No saved jobs yet. Go to Search and save jobs to track them here.
          </div>
        ) : (
          jobs.slice(0, 5).map((job, index) => (
            <div
              key={job.id}
              className={
                index !== jobs.slice(0, 5).length - 1
                  ? "mb-3 pb-3 list-divider"
                  : "mb-1"
              }
            >
              <h6 className="job-card-title mb-1">{job.title}</h6>
              <p className="job-meta mb-2">{job.company_name}</p>
              <span className={getBadgeClass(job.status)}>{job.status}</span>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Dashboard;
