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

  return (
    <div>
      <h1 className="fw-bold mb-4">Saved Jobs</h1>

      {jobs.length === 0 ? (
        <div className="alert alert-info">
          No saved jobs yet. Go to the Search page and save some!
        </div>
      ) : (
        <div className="row g-4">
          {jobs.map((job) => (
            <div key={job.id} className="col-md-6 col-lg-4">
              <div className="card shadow-sm border-0 p-3 h-100 d-flex flex-column">
                <h5 className="fw-semibold">{job.title}</h5>

                <p className="text-muted mb-1">{job.company_name}</p>

                <p className="small">
                  <strong>Status:</strong>{" "}
                  <span className="badge bg-secondary">{job.status}</span>
                </p>

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
