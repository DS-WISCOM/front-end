import React, {useEffect, useState} from "react";
import styles from "../css/DevelopersPage.module.css";
import DeveloperCard from "../component/DeveloperCard";
import axios from "axios";
import Spinner from "../component/Spinner";

function DevelopersPage() {
  const [developers, setDevelopers] = useState([]);
  const [spinner, setSpinner] = useState(null);

  useEffect(() => {
    setSpinner(true);
    axios.get(`/api/developer/total`).then((response) => {
      if (response.data.success) {
        setDevelopers(response.data.DeveloperList);
        // console.log(response.data.DeveloperList);
        setSpinner(false);
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
      {spinner ? (
        <Spinner />
      ) : ( 
      <div id={styles.list}>
        {developerList}
      </div> )}
    </div>
  );
}

export default DevelopersPage;
