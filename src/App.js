import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Navbar from "./component/Navbar";
import AboutPage from "./pages/AboutPage";
import DevelopersPage from "./pages/DevelopersPage";
import ProjectsPage from "./pages/ProjectsPage";
import DevelopersDetailPage from "./pages/DevelopersDetailPage";
import ProjectsDetailPage from "./pages/ProjectsDetailPage";
import ScrollToTop from "./component/ScrollToTop";

function App() {
  return (
    <>
      <Router>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Navbar />}>
            <Route path="/" element={<LandingPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/developers" element={<DevelopersPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route
              path="/developers/detail"
              element={<DevelopersDetailPage />}
            />
            <Route path="/projects/detail" element={<ProjectsDetailPage />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
