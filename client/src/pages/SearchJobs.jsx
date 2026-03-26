import React, { useEffect, useState } from "react";
import axios from "axios";
import { saveJob } from "../utils/storage";

function SearchJobs() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    axios
      .get("https://remotive.com/api/remote-jobs")
      .then((res) => setJobs(res.data.jobs.slice(0, 10)))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <h1 className="fw-bold mb-4">Search Jobs</h1>

      <div className="row g-4">
        {jobs.map((job) => (
          <div key={job.id} className="col-md-6">
            <div className="card shadow-sm border-0 p-3">
              <h5>{job.title}</h5>
              <p className="text-muted">{job.company_name}</p>

              <button
                className="btn btn-primary mt-2"
                onClick={() => saveJob(job)}
              >
                Save Job
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SearchJobs;
