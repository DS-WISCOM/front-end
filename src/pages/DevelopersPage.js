import React from "react";
import DeveloperScroll from "../component/DevelopersScroll";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

function DevelopersPage() {
  return (
    <QueryClientProvider client={queryClient}>
      <div>
        <DeveloperScroll />
      </div>
    </QueryClientProvider>
  );
}

export default DevelopersPage;
