import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { saveJob } from "../utils/storage";

function JobDetails() {
  const { id } = useParams();
  const [job, setJob] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://remotive.com/api/remote-jobs")
      .then((res) => {
        const foundJob = res.data.jobs.find((j) => j.id.toString() === id);
        setJob(foundJob);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <p className="text-center mt-5">Loading job details...</p>;
  }

  if (!job) {
    return (
      <div className="text-center mt-5">
        <h4>Job not found</h4>
        <p className="text-muted">This job may no longer be available.</p>
      </div>
    );
  }

  return (
    <div>
      <h1 className="fw-bold mb-4">{job.title}</h1>

      <div className="card shadow-sm border-0 p-4">
        <h5 className="mb-2">{job.company_name}</h5>

        <p className="text-muted mb-2">{job.candidate_required_location}</p>

        <p className="mb-2">
          <strong>Category:</strong> {job.category}
        </p>

        <p className="mb-2">
          <strong>Job Type:</strong> {job.job_type}
        </p>

        <p className="mb-3">
          <strong>Published:</strong>{" "}
          {new Date(job.publication_date).toLocaleDateString()}
        </p>

        <hr />

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
