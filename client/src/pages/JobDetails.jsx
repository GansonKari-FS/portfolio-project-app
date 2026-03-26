import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { saveJob } from "../utils/storage";

function JobDetails() {
  const { id } = useParams();
  const [job, setJob] = useState(null);

  useEffect(() => {
    axios
      .get("https://remotive.com/api/remote-jobs")
      .then((res) => {
        const foundJob = res.data.jobs.find((j) => j.id.toString() === id);
        setJob(foundJob);
      })
      .catch((err) => console.log(err));
  }, [id]);

  if (!job) {
    return <p className="text-center mt-5">Loading job details...</p>;
  }

  return (
    <div>
      <h1 className="fw-bold mb-4">{job.title}</h1>

      <div className="card shadow-sm border-0 p-4">
        <h5 className="mb-2">{job.company_name}</h5>
        <p className="text-muted mb-2">{job.candidate_required_location}</p>

        <p className="mb-3">
          <strong>Category:</strong> {job.category}
        </p>

        <p className="mb-3">
          <strong>Job Type:</strong> {job.job_type}
        </p>

        <p className="mb-3">
          <strong>Publication Date:</strong>{" "}
          {new Date(job.publication_date).toLocaleDateString()}
        </p>

        <div
          className="mb-4"
          dangerouslySetInnerHTML={{ __html: job.description }}
        />

        <div className="d-flex gap-2">
          <a
            href={job.url}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-success"
          >
            Apply Now
          </a>

          <button className="btn btn-primary" onClick={() => saveJob(job)}>
            Save Job
          </button>
        </div>
      </div>
    </div>
  );
}

export default JobDetails;
