import React from "react";
import ProjectScroll from "../component/ProjectsScroll";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

function ProjectsPage() {
  return (
    <QueryClientProvider client={queryClient}>
      <div>
        <ProjectScroll />
      </div>
    </QueryClientProvider>
  );
}

export default ProjectsPage;
