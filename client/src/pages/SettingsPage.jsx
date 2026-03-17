import { useEffect, useState } from "react";
import { motion } from "framer-motion";

function SettingsPage() {
  const [savedJobs, setSavedJobs] = useState([]);
  const [userName, setUserName] = useState(
    localStorage.getItem("userName") || "Kari",
  );
  const [saveMessage, setSaveMessage] = useState("");

  useEffect(() => {
    const storedJobs = JSON.parse(localStorage.getItem("savedJobs")) || [];
    setSavedJobs(storedJobs);
  }, []);

  const handleNameSave = () => {
    localStorage.setItem("userName", userName);
    setSaveMessage("Preferences saved.");
  };

  const clearSavedJobs = () => {
    localStorage.removeItem("savedJobs");
    setSavedJobs([]);
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <div className="page-header">
        <h2>User Settings</h2>
      </div>

      <div className="content-card">
        <h3>User Preferences</h3>
        <label htmlFor="userName">Your Name:</label>
        <input
          id="userName"
          type="text"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
        <button onClick={handleNameSave}>Save Preferences</button>
        {saveMessage && <p>{saveMessage}</p>}
      </div>

      <div className="content-card">
        <h3>Saved Jobs</h3>
        {savedJobs.length === 0 ? (
          <p>No saved jobs yet.</p>
        ) : (
          <ul className="saved-job-list">
            {savedJobs.map((job) => (
              <li key={job.id}>
                {job.title} - {job.company} ({job.applicationStatus || "Saved"})
              </li>
            ))}
          </ul>
        )}

        <button onClick={clearSavedJobs}>Clear Saved Jobs</button>
      </div>
    </motion.section>
  );
}

export default SettingsPage;
