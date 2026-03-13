function SettingsPage() {
  return (
    <section>
      <div className="page-header">
        <h2>User Settings</h2>
      </div>

      <p className="page-intro">
        This page allows users to manage preferences and saved job tracking.
      </p>

      <div className="content-card">
        <h3>Settings Options</h3>
        <ul>
          <li>View saved jobs</li>
          <li>Update application status</li>
          <li>Remove tracked jobs</li>
          <li>Customize preferences</li>
        </ul>
      </div>
    </section>
  );
}

export default SettingsPage;
