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
    <div>
      <h1 className="fw-bold mb-4">Search Jobs</h1>

      {loading ? (
        <p>Loading jobs...</p>
      ) : (
        <div className="row g-4">
          {jobs.map((job) => (
            <div key={job.id} className="col-md-6 col-lg-4">
              <div className="card shadow-sm border-0 p-3 h-100 d-flex flex-column">
                <h5 className="fw-semibold">{job.title}</h5>

                <p className="text-muted mb-1">{job.company_name}</p>

                <p className="text-muted small">
                  {job.candidate_required_location}
                </p>

                <p className="small">
                  <strong>Category:</strong> {job.category}
                </p>

                <div className="mt-auto d-flex gap-2">
                  <button
                    className="btn btn-primary w-50"
                    onClick={() => saveJob(job)}
                  >
                    Save
                  </button>

                  <Link
                    to={`/details/${job.id}`}
                    className="btn btn-outline-secondary w-50"
                  >
                    Details
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
