import React, { useEffect, useState } from "react";
import { getSavedJobs, removeJob, updateStatus } from "../utils/storage";

function SavedJobs() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    setJobs(getSavedJobs());
  }, []);

  const refresh = () => setJobs(getSavedJobs());

  return (
    <div>
      <h1 className="fw-bold mb-4">Saved Jobs</h1>

      {jobs.length === 0 ? (
        <p>No saved jobs yet.</p>
      ) : (
        jobs.map((job) => (
          <div key={job.id} className="card mb-3 p-3">
            <h5>{job.title}</h5>
            <p>{job.company_name}</p>

            <div className="d-flex gap-2">
              <button
                className="btn btn-success"
                onClick={() => {
                  updateStatus(job.id, "Applied");
                  refresh();
                }}
              >
                Applied
              </button>

              <button
                className="btn btn-warning"
                onClick={() => {
                  updateStatus(job.id, "Interview");
                  refresh();
                }}
              >
                Interview
              </button>

              <button
                className="btn btn-danger"
                onClick={() => {
                  removeJob(job.id);
                  refresh();
                }}
              >
                Remove
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
}

export default SavedJobs;
