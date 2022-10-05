import React, {useEffect, useState} from "react";
import Devtest from "../component/Devtest";
import styles from "../css/DevelopersPage.module.css";
import DeveloperCard from "../component/DeveloperCard";
import axios from "axios";

function DevelopersPage() {
  const [developers, setDevelopers] = useState([]);

  useEffect(() => {
    axios.get(`/api/developer/total`).then((response) => {
      if (response.data.success) {
        setDevelopers(response.data.DeveloperList);
        // console.log(response.data.DeveloperList);
      }
    });
  }, []);

  const developerList = developers?.map((developer, idx) => {
    return (
      <DeveloperCard key={idx} data={developer} />
    )
  })

  return (
    <div id={styles.developersPage}>
      <div id={styles.developersPageTitle}>DEVELOPERS</div>
      <div id={styles.list}>
        {developerList}
      </div>
    </div>
  );
}

export default DevelopersPage;
