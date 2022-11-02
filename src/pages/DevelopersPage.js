import React from "react";
import DeveloperScroll from "../component/DevelopersScroll";
import { QueryClient, QueryClientProvider } from "react-query";
// import $ from "jquery";

const queryClient = new QueryClient();

function DevelopersPage() {
  // $(() => {
  //   setTimeout(() => {
  //     window.scrollTo(0, 0);
  //   }, 100);
  // });

  return (
    <QueryClientProvider client={queryClient}>
      <div>
        <DeveloperScroll />
      </div>
    </QueryClientProvider>
  );
}

export default DevelopersPage;
