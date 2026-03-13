function DetailsPage() {
  return (
    <section>
      <div className="page-header">
        <h2>Job Details</h2>
      </div>

      <p className="page-intro">
        This page will show the selected job listing in more detail.
      </p>

      <div className="content-card">
        <h3>Frontend Developer</h3>
        <p>
          <strong>Company:</strong> TechCorp
        </p>
        <p>
          <strong>Location:</strong> Remote
        </p>
        <p>
          <strong>Status:</strong> Saved
        </p>
        <p>
          This section will later include the full job description,
          qualifications, and application tracking tools.
        </p>
      </div>
    </section>
  );
}

export default DetailsPage;
