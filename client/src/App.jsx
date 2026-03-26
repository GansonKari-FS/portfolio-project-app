import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import SearchJobs from "./pages/SearchJobs";
import SavedJobs from "./pages/SavedJobs";
import JobDetails from "./pages/JobDetails";
import Settings from "./pages/Settings";
import Navigation from "./components/Navigation";

function App() {
  return (
    <Router>
      <div className="bg-light min-vh-100">
        <Navigation />

        <div className="container py-4">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/search" element={<SearchJobs />} />
            <Route path="/saved" element={<SavedJobs />} />
            <Route path="/details/:id" element={<JobDetails />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
