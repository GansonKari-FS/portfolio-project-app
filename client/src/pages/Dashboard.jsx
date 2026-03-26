import React, { useEffect, useState } from "react";
import { getSavedJobs } from "../utils/storage";

function Dashboard() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    setJobs(getSavedJobs());
  }, []);

  const saved = jobs.length;
  const applied = jobs.filter((j) => j.status === "Applied").length;
  const interviews = jobs.filter((j) => j.status === "Interview").length;

  return (
    <div>
      <h1 className="fw-bold mb-4">Dashboard</h1>

      <div className="row g-4">
        <div className="col-md-4">
          <div className="card shadow-sm p-3">
            <h4>{saved}</h4>
            <p>Saved Jobs</p>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card shadow-sm p-3">
            <h4>{applied}</h4>
            <p>Applications Sent</p>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card shadow-sm p-3">
            <h4>{interviews}</h4>
            <p>Interviews</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
