import { Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation.jsx";
import DashboardPage from "./pages/DashboardPage.jsx";
import SearchPage from "./pages/SearchPage.jsx";
import DetailsPage from "./pages/DetailsPage.jsx";
import SettingsPage from "./pages/SettingsPage.jsx";
import "./App.css";

function App() {
  return (
    <div className="app-shell">
      <Navigation />

      <main className="page-content">
        <Routes>
          <Route path="/" element={<DashboardPage />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/details" element={<DetailsPage />} />
          <Route path="/settings" element={<SettingsPage />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
