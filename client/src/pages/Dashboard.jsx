import React, { useEffect, useState } from "react";
import {
  FaBriefcase,
  FaPaperPlane,
  FaUserCheck,
  FaArrowRight,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import { getSavedJobs } from "../utils/storage";

function Dashboard() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    setJobs(getSavedJobs());
  }, []);

  const saved = jobs.length;
  const applied = jobs.filter((job) => job.status === "Applied").length;
  const interviews = jobs.filter((job) => job.status === "Interview").length;

  const getBadgeClass = (status) => {
    if (status === "Applied") return "badge-soft badge-applied";
    if (status === "Interview") return "badge-soft badge-interview";
    return "badge-soft badge-saved";
  };

  return (
    <div className="page-shell dashboard-page">
      <div className="dashboard-hero mb-4">
        <div className="dashboard-hero-content">
          <div className="dashboard-hero-text">
            <p className="dashboard-eyebrow mb-2">JOB SEARCH COMMAND CENTER</p>
            <h1 className="dashboard-title mb-3">
              Track every opportunity in one place
            </h1>
            <p className="dashboard-subtitle mb-4">
              Save promising jobs, monitor your applications, and keep interview
              progress organized with a cleaner workflow.
            </p>

            <div className="d-flex flex-wrap gap-3">
              <Link to="/search" className="btn btn-light fw-bold px-4 py-2">
                Explore Jobs
              </Link>
              <Link
                to="/saved"
                className="btn btn-outline-light fw-bold px-4 py-2"
              >
                View Saved Jobs
              </Link>
            </div>
          </div>

          <div className="dashboard-hero-panel">
            <div className="hero-mini-card">
              <span className="hero-mini-label">Active Tracker</span>
              <h3 className="mb-1">{saved}</h3>
              <p className="mb-0">roles currently being tracked</p>
            </div>
          </div>
        </div>
      </div>

      <div className="row g-4 mb-4">
        <div className="col-md-4">
          <div className="card border-0 p-4 stat-card premium-stat-card">
            <div className="stat-icon stat-icon-blue">
              <FaBriefcase />
            </div>
            <div>
              <div className="stat-number">{saved}</div>
              <div className="stat-label">Saved Jobs</div>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card border-0 p-4 stat-card premium-stat-card">
            <div className="stat-icon stat-icon-green">
              <FaPaperPlane />
            </div>
            <div>
              <div className="stat-number">{applied}</div>
              <div className="stat-label">Applications Sent</div>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card border-0 p-4 stat-card premium-stat-card">
            <div className="stat-icon stat-icon-gold">
              <FaUserCheck />
            </div>
            <div>
              <div className="stat-number">{interviews}</div>
              <div className="stat-label">Interviews</div>
            </div>
          </div>
        </div>
      </div>

      <div className="row g-4">
        <div className="col-lg-8">
          <div className="card border-0 p-4 h-100">
            <div className="d-flex justify-content-between align-items-center mb-3">
              <h4 className="section-title mb-0">Recently Saved Jobs</h4>
              <Link to="/saved" className="dashboard-link">
                View All <FaArrowRight className="ms-1" />
              </Link>
            </div>

            {jobs.length === 0 ? (
              <div className="empty-state">
                No saved jobs yet. Go to Search and save jobs to track them
                here.
              </div>
            ) : (
              jobs.slice(0, 5).map((job, index) => (
                <div
                  key={job.id}
                  className={
                    index !== jobs.slice(0, 5).length - 1
                      ? "dashboard-job-row"
                      : "dashboard-job-row border-0 pb-0 mb-0"
                  }
                >
                  <div>
                    <h6 className="job-card-title mb-1">{job.title}</h6>
                    <p className="job-meta mb-0">{job.company_name}</p>
                  </div>
                  <span className={getBadgeClass(job.status)}>
                    {job.status}
                  </span>
                </div>
              ))
            )}
          </div>
        </div>

        <div className="col-lg-4">
          <div className="card border-0 p-4 h-100 dashboard-side-card">
            <h4 className="section-title">Quick Overview</h4>

            <div className="quick-stat-block">
              <span className="quick-stat-title">Progress Snapshot</span>
              <p className="quick-stat-text mb-0">
                You currently have <strong>{saved}</strong> saved roles,{" "}
                <strong>{applied}</strong> submitted applications, and{" "}
                <strong>{interviews}</strong> interview-stage opportunities.
              </p>
            </div>

            <div className="quick-stat-block">
              <span className="quick-stat-title">Next Best Step</span>
              <p className="quick-stat-text mb-0">
                Save more jobs from the Search page, then update statuses in
                Saved Jobs to keep your dashboard accurate.
              </p>
            </div>

            <div className="mt-auto pt-3">
              <Link to="/search" className="btn btn-primary w-100">
                Search More Jobs
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
