import { useEffect, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import DashboardStats from "../components/DashboardStats.jsx";
import JobCard from "../components/JobCard.jsx";

function DashboardPage() {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const [savedJobs, setSavedJobs] = useState(
    JSON.parse(localStorage.getItem("savedJobs")) || [],
  );

  const fetchJobs = async () => {
    try {
      setLoading(true);
      setError("");

      const response = await axios.get("https://randomuser.me/api/?results=6");

      const formattedJobs = response.data.results.map((person, index) => {
        const titles = [
          "Frontend Developer",
          "UI Designer",
          "Product Manager",
          "React Developer",
          "UX Researcher",
          "Full Stack Developer",
        ];

        const companies = [
          "TechCorp",
          "InnovateX",
          "BrightPath",
          "CodeWave",
          "Skyline Labs",
          "NextGen Solutions",
        ];

        const statuses = ["Saved", "Applied", "Interview"];

        return {
          id: index + 1,
          title: titles[index % titles.length],
          company: companies[index % companies.length],
          location: `${person.location.city}, ${person.location.country}`,
          contact: `${person.name.first} ${person.name.last}`,
          email: person.email,
          image: person.picture.large,
          status: statuses[index % statuses.length],
          description: `This is a sample ${titles[index % titles.length]} opportunity with ${
            companies[index % companies.length]
          }.`,
        };
      });

      setJobs(formattedJobs);
    } catch (err) {
      setError("Error loading job data.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  const toggleSaveJob = (job) => {
    let updated;
    const exists = savedJobs.find((j) => j.id === job.id);

    if (exists) {
      updated = savedJobs.filter((j) => j.id !== job.id);
    } else {
      updated = [...savedJobs, { ...job, applicationStatus: "Saved" }];
    }

    setSavedJobs(updated);
    localStorage.setItem("savedJobs", JSON.stringify(updated));
  };

  const viewDetails = (job) => {
    localStorage.setItem("selectedJob", JSON.stringify(job));
  };

  const totalJobs = jobs.length;
  const savedCount = savedJobs.length;
  const appliedCount = savedJobs.filter(
    (job) => job.applicationStatus === "Applied",
  ).length;
  const interviewCount = savedJobs.filter(
    (job) => job.applicationStatus === "Interview",
  ).length;

  return (
    <motion.section
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <div className="page-header">
        <h2>Dashboard</h2>
        <button onClick={fetchJobs}>Refresh Jobs</button>
      </div>

      <p className="page-intro">
        The dashboard gives users a quick overview of tracked jobs, saved
        positions, and application progress.
      </p>

      <DashboardStats
        totalJobs={totalJobs}
        savedJobs={savedCount}
        appliedJobs={appliedCount}
        interviews={interviewCount}
      />

      {loading && <p>Loading jobs...</p>}
      {error && <p>{error}</p>}

      <div className="job-grid">
        {jobs.map((job) => (
          <JobCard
            key={job.id}
            job={job}
            onSave={toggleSaveJob}
            onViewDetails={viewDetails}
            isSaved={savedJobs.some((j) => j.id === job.id)}
          />
        ))}
      </div>
    </motion.section>
  );
}

export default DashboardPage;
