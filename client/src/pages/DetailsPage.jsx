import { useEffect, useState } from "react";
import { motion } from "framer-motion";

function DetailsPage() {
  const [job, setJob] = useState(null);

  useEffect(() => {
    const storedJob = JSON.parse(localStorage.getItem("selectedJob"));
    if (storedJob) {
      setJob(storedJob);
    }
  }, []);

  const updateStatus = (newStatus) => {
    const savedJobs = JSON.parse(localStorage.getItem("savedJobs")) || [];
    const exists = savedJobs.some((savedJob) => savedJob.id === job.id);

    const updatedJobs = exists
      ? savedJobs.map((savedJob) =>
          savedJob.id === job.id
            ? { ...savedJob, applicationStatus: newStatus }
            : savedJob,
        )
      : [...savedJobs, { ...job, applicationStatus: newStatus }];

    localStorage.setItem("savedJobs", JSON.stringify(updatedJobs));
    const updatedJob = { ...job, applicationStatus: newStatus };
    localStorage.setItem("selectedJob", JSON.stringify(updatedJob));
    setJob(updatedJob);
  };

  if (!job) {
    return <p>No job selected yet. Go to Dashboard or Search and click View Details.</p>;
  }

  return (
    <motion.section
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <div className="page-header">
        <h2>Job Details</h2>
      </div>

      <div className="content-card">
        <h3>{job.title}</h3>
        <p><strong>Company:</strong> {job.company}</p>
        <p><strong>Location:</strong> {job.location}</p>
        <p><strong>Recruiter:</strong> {job.contact}</p>
        <p><strong>Email:</strong> {job.email}</p>
        <p><strong>Description:</strong> {job.description}</p>
        <p><strong>Status:</strong> {job.applicationStatus || "Saved"}</p>

        <div className="card-actions">
          <button onClick={() => updateStatus("Applied")}>Mark Applied</button>
          <button onClick={() => updateStatus("Interview")}>Mark Interview</button>
          <button onClick={() => updateStatus("Offer")}>Mark Offer</button>
          <button onClick={() => updateStatus("Rejected")}>Mark Rejected</button>
        </div>
      </div>
    </motion.section>
  );
}

export default DetailsPage;
