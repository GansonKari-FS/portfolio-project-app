import React, { useEffect, useState } from "react";
import { getSavedJobs, removeJob, updateStatus } from "../utils/storage";
import { Link } from "react-router-dom";

function SavedJobs() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    setJobs(getSavedJobs());
  }, []);

  const refreshJobs = () => {
    setJobs(getSavedJobs());
  };

  const getBadgeClass = (status) => {
    if (status === "Applied") return "badge-soft badge-applied";
    if (status === "Interview") return "badge-soft badge-interview";
    return "badge-soft badge-saved";
  };

  return (
    <div className="page-shell">
      <h1 className="fw-bold mb-2">Saved Jobs</h1>
      <p className="hero-note">
        Manage your saved jobs, track your progress, and stay organized.
      </p>

      {jobs.length === 0 ? (
        <div className="empty-state">
          No saved jobs yet. Go to Search and save some!
        </div>
      ) : (
        <div className="row g-4">
          {jobs.map((job) => (
            <div key={job.id} className="col-md-6 col-lg-4">
              <div className="card border-0 p-4 h-100 d-flex flex-column">
                <h5 className="job-card-title mb-1">{job.title}</h5>

                <p className="job-meta mb-2">{job.company_name}</p>

                <div className="mb-3">
                  <span className={getBadgeClass(job.status)}>
                    {job.status}
                  </span>
                </div>

                <div className="mt-auto d-flex flex-column gap-2">
                  <Link
                    to={`/details/${job.id}`}
                    className="btn btn-outline-secondary w-100"
                  >
                    View Details
                  </Link>

                  <div className="d-flex gap-2">
                    <button
                      className="btn btn-success w-50"
                      onClick={() => {
                        updateStatus(job.id, "Applied");
                        refreshJobs();
                      }}
                    >
                      Applied
                    </button>

                    <button
                      className="btn btn-warning w-50"
                      onClick={() => {
                        updateStatus(job.id, "Interview");
                        refreshJobs();
                      }}
                    >
                      Interview
                    </button>
                  </div>

                  <button
                    className="btn btn-danger w-100"
                    onClick={() => {
                      removeJob(job.id);
                      refreshJobs();
                    }}
                  >
                    Remove Job
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default SavedJobs;
