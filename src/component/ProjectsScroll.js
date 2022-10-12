import React, { useEffect } from "react";
import styles from "../css/DevelopersPage.module.css";
import ProjectCard from "./ProjectCard";
import { useInView } from "react-intersection-observer";
import { useInfiniteQuery } from "react-query";
import axios from "axios";

const ProjectsScroll = () => {
  const fetchPostList = async (pageParam) => {
    const res = await axios.get(`/api/project/total?page=${pageParam}`);

    return {
      projects_data: res.data.ProjectList,
      current_page: pageParam,
      nextPage: pageParam + 1,
      isLast: res.data.isLast,
    };
  };

  const { ref, inView } = useInView();
  const { data, status, fetchNextPage, isFetchingNextPage } = useInfiniteQuery(
    "projects_data",
    ({ pageParam = 1 }) => fetchPostList(pageParam),
    {
      getNextPageParam: (lastPage) =>
        !lastPage.isLast ? lastPage.nextPage : undefined,
    }
  );

  useEffect(() => {
    if (inView) fetchNextPage();
  }, [inView]);

  if (status === "loading") return <div>Loading data...</div>;
  if (status === "error") return <div>Error fetching data</div>;

  const projectList = data?.pages.map((page) => {
    return (
      <>
        {page?.projects_data?.map((project, idx) => {
          return <ProjectCard key={idx} data={project} />;
        })}
      </>
    );
  });

  return (
    <div id={styles.projectsPage}>
      <div id={styles.projectsPageTitle}>PROJECTS</div>
      <div id={styles.list}>{projectList}</div>
      {isFetchingNextPage ? <div>Loading data...</div> : <div ref={ref}></div>}
    </div>
  );
};

export default ProjectsScroll;
