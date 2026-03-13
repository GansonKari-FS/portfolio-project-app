function DashboardStats({ totalJobs, savedJobs, appliedJobs, interviews }) {
  return (
    <section className="stats-grid">
      <div className="stat-card">
        <h3>Total Jobs</h3>
        <p>{totalJobs}</p>
      </div>

      <div className="stat-card">
        <h3>Saved Jobs</h3>
        <p>{savedJobs}</p>
      </div>

      <div className="stat-card">
        <h3>Applied Jobs</h3>
        <p>{appliedJobs}</p>
      </div>

      <div className="stat-card">
        <h3>Interviews</h3>
        <p>{interviews}</p>
      </div>
    </section>
  );
}

export default DashboardStats;
