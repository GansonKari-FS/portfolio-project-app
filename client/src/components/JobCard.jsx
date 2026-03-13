function JobCard({ job }) {
  return (
    <article className="job-card">
      <img src={job.image} alt={job.contact} className="job-avatar" />

      <div className="job-content">
        <span className={`status-badge ${job.status.toLowerCase()}`}>
          {job.status}
        </span>

        <h4>{job.title}</h4>
        <p className="company">{job.company}</p>
        <p>{job.location}</p>
        <p>Recruiter: {job.contact}</p>
        <p>{job.email}</p>
      </div>
    </article>
  );
}

export default JobCard;
