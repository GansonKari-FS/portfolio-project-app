import { useEffect, useState } from "react";
import axios from "axios";
import DashboardStats from "../components/DashboardStats.jsx";
import JobCard from "../components/JobCard.jsx";

function DashboardPage() {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

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

  const totalJobs = jobs.length;
  const savedJobs = jobs.filter((job) => job.status === "Saved").length;
  const appliedJobs = jobs.filter((job) => job.status === "Applied").length;
  const interviews = jobs.filter((job) => job.status === "Interview").length;

  return (
    <section>
      <div className="page-header">
        <h2>Dashboard</h2>
        <button onClick={fetchJobs}>Refresh Jobs</button>
      </div>

      <p className="page-intro">
        This dashboard gives users a quick view of tracked jobs, applications,
        and interview activity.
      </p>

      <DashboardStats
        totalJobs={totalJobs}
        savedJobs={savedJobs}
        appliedJobs={appliedJobs}
        interviews={interviews}
      />

      {loading && <p>Loading jobs...</p>}
      {error && <p>{error}</p>}

      <div className="job-grid">
        {jobs.map((job) => (
          <JobCard key={job.id} job={job} />
        ))}
      </div>
    </section>
  );
}

export default DashboardPage;
