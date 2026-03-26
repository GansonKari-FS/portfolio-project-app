const KEY = "savedJobs";

export function getSavedJobs() {
  return JSON.parse(localStorage.getItem(KEY)) || [];
}

export function saveJob(job) {
  const jobs = getSavedJobs();

  if (!jobs.find((j) => j.id === job.id)) {
    jobs.push({ ...job, status: "Saved" });
    localStorage.setItem(KEY, JSON.stringify(jobs));
  }
}

export function removeJob(id) {
  const jobs = getSavedJobs().filter((job) => job.id !== id);
  localStorage.setItem(KEY, JSON.stringify(jobs));
}

export function updateStatus(id, status) {
  const jobs = getSavedJobs().map((job) =>
    job.id === id ? { ...job, status } : job,
  );
  localStorage.setItem(KEY, JSON.stringify(jobs));
}
