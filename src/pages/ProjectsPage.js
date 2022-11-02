import React from "react";
import ProjectScroll from "../component/ProjectsScroll";
import { QueryClient, QueryClientProvider } from "react-query";
//import $ from "jquery";

const queryClient = new QueryClient();

function ProjectsPage() {
  // $(() => {
  //   setTimeout(() => {
  //     window.scrollTo(0, 0);
  //   }, 100);
  // });

  return (
    <QueryClientProvider client={queryClient}>
      <div>
        <ProjectScroll />
      </div>
    </QueryClientProvider>
  );
}

export default ProjectsPage;
