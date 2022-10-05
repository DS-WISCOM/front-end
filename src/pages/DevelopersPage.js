import React, { useEffect, useState } from "react";
import Devtest from "../component/Devtest";
import styles from "../css/DevelopersPage.module.css";
import DeveloperCard from "../component/DeveloperCard";
import { useInView } from "react-intersection-observer";
import { useInfiniteQuery } from "react-query";
import axios from "axios";

import DeveloperScroll from "../pages/DevelopersScroll";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

function DevelopersPage() {
  // const [developers, setDevelopers] = useState([]);

  // const fetchPostList = async (pageParam) => {
  //   const res = await axios
  //     .get(`/api/developer/total?page=${pageParam}`)
  //     .then((response) => {
  //       if (response.data.success) {
  //         setDevelopers(response.data.DeveloperList);
  //         //console.log(response.data.DeveloperList.length); //0 or 8
  //       }
  //     });
  //   const { posts, isLast } = res.data;
  //   console.log(res.data);
  //   return { posts, nextPage: pageParam + 1, isLast };
  // };

  // const { ref, inView } = useInView();
  // const { data, status, fetchNextPage, isFetchingNextPage } = useInfiniteQuery(
  //   "posts",
  //   ({ pageParam = 1 }) => fetchPostList(pageParam),
  //   {
  //     getNextPageParam: (lastPage) =>
  //       !lastPage.isLast ? lastPage.nextPage : undefined,
  //   }
  // );

  // useEffect(() => {
  //   if (inView) fetchNextPage();
  // }, [inView]);

  // if (status === "loading") return <div>Loading data...</div>;
  // if (status === "error") return <div>Error fetching data</div>;

  // const developerList = developers?.map((developer, idx) => {
  //   return <DeveloperCard key={idx} data={developer} />;
  // });

  return (
    <QueryClientProvider client={queryClient}>
      <div>
        <DeveloperScroll />
      </div>
    </QueryClientProvider>
    // <div id={styles.developersPage}>

    //   <div id={styles.developersPageTitle}>DEVELOPERS</div>
    //   <div id={styles.list}>{developerList}</div>
    //   {isFetchingNextPage ? (
    //     <div id={styles.list}>{developerList}</div>
    //   ) : (
    //     <div ref={ref}></div>
    //   )}
    // </div>
  );
}

export default DevelopersPage;
