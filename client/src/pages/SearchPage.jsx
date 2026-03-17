import { useEffect, useMemo, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import JobCard from "../components/JobCard.jsx";

function SearchPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [jobs, setJobs] = useState([]);
  const [savedJobs, setSavedJobs] = useState(
    JSON.parse(localStorage.getItem("savedJobs")) || [],
  );

  useEffect(() => {
    const fetchJobs = async () => {
      const response = await axios.get("https://randomuser.me/api/?results=8");

      const titles = [
        "Frontend Developer",
        "UI Designer",
        "Product Manager",
        "React Developer",
        "UX Researcher",
        "Full Stack Developer",
        "QA Analyst",
        "Technical Writer",
      ];

      const companies = [
        "TechCorp",
        "InnovateX",
        "BrightPath",
        "CodeWave",
        "Skyline Labs",
        "NextGen Solutions",
        "CloudBridge",
        "Pixel Forge",
      ];

      const formattedJobs = response.data.results.map((person, index) => ({
        id: index + 101,
        title: titles[index % titles.length],
        company: companies[index % companies.length],
        location: `${person.location.city}, ${person.location.country}`,
        contact: `${person.name.first} ${person.name.last}`,
        email: person.email,
        image: person.picture.large,
        status: "New",
        description: `A remote ${titles[index % titles.length]} opportunity with ${companies[index % companies.length]}.`,
      }));

      setJobs(formattedJobs);
    };

    fetchJobs();
  }, []);

  const toggleSaveJob = (job) => {
    let updated;
    const exists = savedJobs.find((savedJob) => savedJob.id === job.id);

    if (exists) {
      updated = savedJobs.filter((savedJob) => savedJob.id !== job.id);
    } else {
      updated = [...savedJobs, { ...job, applicationStatus: "Saved" }];
    }

    setSavedJobs(updated);
    localStorage.setItem("savedJobs", JSON.stringify(updated));
  };

  const viewDetails = (job) => {
    localStorage.setItem("selectedJob", JSON.stringify(job));
  };

  const filteredJobs = useMemo(() => {
    return jobs.filter(
      (job) =>
        job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        job.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
        job.location.toLowerCase().includes(searchTerm.toLowerCase()),
    );
  }, [jobs, searchTerm]);

  return (
    <motion.section
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <div className="page-header">
        <h2>Search Jobs</h2>
      </div>

      <p className="page-intro">
        Search remote job listings by title, company, or location and save the
        ones you want to track.
      </p>

      <div className="content-card">
        <input
          type="text"
          placeholder="Search jobs..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="job-grid">
        {filteredJobs.map((job) => (
          <JobCard
            key={job.id}
            job={job}
            onSave={toggleSaveJob}
            onViewDetails={viewDetails}
            isSaved={savedJobs.some((savedJob) => savedJob.id === job.id)}
          />
        ))}
      </div>
    </motion.section>
  );
}

export default SearchPage;
