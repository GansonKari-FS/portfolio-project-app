import React, { useEffect, useState } from "react";

function Settings() {
  const [name, setName] = useState("");
  const [jobTitle, setJobTitle] = useState("");
  const [preferredCategory, setPreferredCategory] = useState("");

  useEffect(() => {
    const savedSettings =
      JSON.parse(localStorage.getItem("jobHunterSettings")) || {};
    setName(savedSettings.name || "");
    setJobTitle(savedSettings.jobTitle || "");
    setPreferredCategory(savedSettings.preferredCategory || "");
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    const settings = {
      name,
      jobTitle,
      preferredCategory,
    };

    localStorage.setItem("jobHunterSettings", JSON.stringify(settings));
    alert("Settings saved successfully.");
  };

  return (
    <div>
      <h1 className="fw-bold mb-4">Settings</h1>

      <div className="card shadow-sm border-0 p-4">
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label fw-semibold">Name</label>
            <input
              type="text"
              className="form-control"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your name"
            />
          </div>

          <div className="mb-3">
            <label className="form-label fw-semibold">
              Career Goal / Job Title
            </label>
            <input
              type="text"
              className="form-control"
              value={jobTitle}
              onChange={(e) => setJobTitle(e.target.value)}
              placeholder="Example: Front-End Developer"
            />
          </div>

          <div className="mb-3">
            <label className="form-label fw-semibold">
              Preferred Job Category
            </label>
            <input
              type="text"
              className="form-control"
              value={preferredCategory}
              onChange={(e) => setPreferredCategory(e.target.value)}
              placeholder="Example: Software Development"
            />
          </div>

          <button type="submit" className="btn btn-primary">
            Save Settings
          </button>
        </form>
      </div>
    </div>
  );
}

export default Settings;
