import React, { useEffect, useState } from "react";
import styles from "../css/DevelopersPage.module.css";
import DeveloperCard from "./DeveloperCard";
import { useInView } from "react-intersection-observer";
import { useInfiniteQuery } from "react-query";
import Spinner from "../component/Spinner";
import axios from "axios";

const DevelopersScroll = () => {
  const fetchPostList = async (pageParam) => {
    const res = await axios.get(`/api/developer/total?page=${pageParam}`);

    return {
      developers_data: res.data.DeveloperList,
      current_page: pageParam,
      nextPage: pageParam + 1,
      isLast: res.data.isLast,
    };
  };

  const { ref, inView } = useInView();
  const { data, status, fetchNextPage, isFetchingNextPage } = useInfiniteQuery(
    "developers_data",
    ({ pageParam = 1 }) => fetchPostList(pageParam),
    {
      getNextPageParam: (lastPage) =>
        !lastPage.isLast ? lastPage.nextPage : undefined,
    }
  );

  useEffect(() => {
    if (inView) fetchNextPage();
  }, [inView]);

  if (status === "loading") return <Spinner />;
  if (status === "error") return <Spinner />;

  const developerList = data?.pages.map((page, index) => {
    return (
      <React.Fragment key={index}>
        {page?.developers_data?.map((dev, idx) => {
          return <DeveloperCard key={idx} data={dev} />;
        })}
      </React.Fragment>
    );
  });

  return (
    <div id={styles.developersPage}>
      <div id={styles.developersPageTitle}>DEVELOPERS</div>
      <div id={styles.list}>{developerList}</div>
      {isFetchingNextPage ? <Spinner /> : <div ref={ref}></div>}
    </div>
  );
};

export default DevelopersScroll;
