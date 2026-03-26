import React, { useEffect, useState } from "react";
import axios from "axios";
import { saveJob } from "../utils/storage";
import { Link } from "react-router-dom";

function SearchJobs() {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://remotive.com/api/remote-jobs")
      .then((res) => {
        setJobs(res.data.jobs.slice(0, 12));
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, []);

  return (
    <div className="page-shell">
      <div className="hero-banner mb-4">
        <h3 className="mb-2 d-flex align-items-center gap-2">
          <span style={{ fontSize: "1.35rem" }}>🔎</span>
          Find Your Next Opportunity
        </h3>
        <p className="mb-0">
          Explore remote roles, save the best matches, and open full job details
          in one click.
        </p>
      </div>

      <h1 className="fw-bold mb-2">Search Jobs</h1>
      <p className="hero-note">
        Browse remote opportunities and save jobs that match your goals.
      </p>

      {loading ? (
        <div className="empty-state">Loading jobs...</div>
      ) : (
        <div className="row g-4">
          {jobs.map((job) => (
            <div key={job.id} className="col-md-6 col-lg-4">
              <div className="card border-0 p-4 h-100 d-flex flex-column">
                <h5 className="job-card-title mb-1">{job.title}</h5>

                <p className="job-meta mb-1">{job.company_name}</p>

                <p className="job-meta mb-2">
                  {job.candidate_required_location}
                </p>

                <p className="job-meta mb-3">
                  <strong>Category:</strong> {job.category}
                </p>

                <div className="mt-auto d-flex gap-2">
                  <button
                    className="btn btn-primary w-50"
                    onClick={() => saveJob(job)}
                  >
                    Save Job
                  </button>

                  <Link
                    to={`/details/${job.id}`}
                    className="btn btn-outline-secondary w-50"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default SearchJobs;
