<<<<<<< HEAD
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Navbar from "./component/Navbar";
import AboutPage from "./pages/AboutPage";
import DevelopersPage from "./pages/DevelopersPage";
import ProjectsPage from "./pages/ProjectsPage";
import DevelopersdetailPage from "./pages/DevelopersdetailPage";
import ProjectsdetailPage from "./pages/ProjectsdetailPage";
=======
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import Navbar from './component/Navbar';
import AboutPage from './pages/AboutPage';
import DevelopersPage from './pages/DevelopersPage';
import ProjectsPage from './pages/ProjectsPage';
import DevelopersdetailPage from './pages/DevelopersdetailPage'
import ProjectsdetailPage from './pages/ProjectsdetailPage'
>>>>>>> 503a7a9390f6b41d485581e46501aec8181cb7c1

function App() {
  return (
    <>
<<<<<<< HEAD
      <Router>
        <Routes>
          <Route path="/" element={<Navbar />}>
            <Route path="/" element={<LandingPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/developers" element={<DevelopersPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route
              path="/developers/detail"
              element={<DevelopersdetailPage />}
            />
            <Route path="/projects/detail" element={<ProjectsdetailPage />} />
          </Route>
        </Routes>
      </Router>
=======
    <Router>
      <Routes>
        {/*<Route path ="/" element={<Navbar />}>*/}
          <Route path="/" element={<LandingPage />}/>
          <Route path="/about" element={<AboutPage />}/>
          <Route path="/developers" element={<DevelopersPage />}/>
          <Route path="/projects" element={<ProjectsPage />}/>
          <Route path="/developers/detail" element={<DevelopersdetailPage />}/>
          <Route path="/projects/detail" element={<ProjectsdetailPage />}/>
        {/*</Route>*/}
      </Routes>
    </Router>
>>>>>>> 503a7a9390f6b41d485581e46501aec8181cb7c1
    </>
  );
}

export default App;
