import React, {useState, useEffect} from "react";
import styles from "../css/DevelopersPage.module.css";
import axios from "axios";
import DeveloperCard from "../component/DeveloperCard";
import ProjectCard from "../component/ProjectCard";

function ProjectsPage() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    axios.get(`/api/project/total`).then((response) => {
      if (response.data.success) {
        setProjects(response.data.ProjectList);
        // console.log(response.data.ProjectList);
      }
    });
  }, []);

  const projectList = projects?.map((project, idx) => {
    return (
      <ProjectCard key={idx} data={project} />
    )
  })

  return (
    <div id={styles.projectsPage}>
      <div id={styles.projectsPageTitle}>PROJECTS</div>
      <div id={styles.list}>
        {projectList}
      </div>
    </div>
  );
}

export default ProjectsPage;
