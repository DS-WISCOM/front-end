import React, { useEffect, useState } from "react";
import styles from "../css/DevelopersPage.module.css";
import DeveloperCard from "../component/DeveloperCard";
import { useInView } from "react-intersection-observer";
import { useInfiniteQuery } from "react-query";
import axios from "axios";

const DevelopersScroll = () => {
  //const [developers, setDevelopers] = useState([]);
  const count = useState(2);
  var pageParam = 1;

  const fetchPostList = async (pageParam) => {
    const res = await axios.get(`/api/developer/total?page=${pageParam}`);
    //const { posts } = developers;
    //const { isLast } = developers.length;

    return {
      developers_data: res.data.DeveloperList,
      current_page: pageParam,
      nextPage: ++pageParam,
    };

    //const { DeveloperList, isLast } = res.data;

    //return { DeveloperList, nextPage: pageParam + 1, isLast };
  };

  const { ref, inView } = useInView();
  const { data, status, fetchNextPage, isFetchingNextPage } = useInfiniteQuery(
    "developers_data",
    () => fetchPostList(pageParam),
    {
      getNextPageParam: (lastPage) =>
        pageParam <= count ? lastPage.nextPage : undefined,
    }
  );

  useEffect(() => {
    if (inView) fetchNextPage();
  }, [inView]);

  if (status === "loading") return <div>Loading data...</div>;
  if (status === "error") return <div>Error fetching data</div>;

  const developerList = data?.pages.map((page) => {
    <div>
      {page?.developers_data?.map((dev, idx) => {
        //console.log(dev, idx);
        return <DeveloperCard key={idx} data={dev} />;
      })}
    </div>;
    //return <DeveloperCard key={idx} data={developer} />;
  });

  return (
    <div id={styles.developersPage}>
      <div id={styles.developersPageTitle}>DEVELOPERS</div>
      <div id={styles.list}>{developerList}</div>
      {isFetchingNextPage ? <div>Loading data...</div> : <div ref={ref}></div>}
    </div>
  );
};

export default DevelopersScroll;
