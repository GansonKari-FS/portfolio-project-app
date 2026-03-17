function JobCard({ job, onSave, onViewDetails, isSaved }) {
  return (
    <article className="job-card">
      <img src={job.image} alt={job.contact} className="job-avatar" />

      <div className="job-content">
        <span className={`status-badge ${job.status.toLowerCase()}`}>
          {job.status}
        </span>

        <h3>{job.title}</h3>
        <p className="company">{job.company}</p>
        <p>{job.location}</p>
        <p>Recruiter: {job.contact}</p>
        <p>{job.email}</p>

        <div className="card-actions">
          <button onClick={() => onSave(job)}>
            {isSaved ? "Unsave" : "Save Job"}
          </button>

          <button onClick={() => onViewDetails(job)}>View Details</button>
        </div>
      </div>
    </article>
  );
}

export default JobCard;
