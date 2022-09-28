import React, { useEffect, useState } from "react";
import axios from "axios";
import $ from "jquery";
import styles from "../css/Devtest.module.css";

const DevTest = () => {
  const [developer, setDeveloper] = useState();

  useEffect(() => {
    axios.get(`/api/developer/total`).then((response) => {
      if (response.data.success) {
        setDeveloper(response.data);
      }
    });
  }, []);

  return (
    <div id={styles.DevelopersdetailPage}>
      <div id="devList" className={styles.devList}>
        <div id={styles.devCard}>
          {developer &&
            developer.DeveloperList.map((dev) => (
              <div id={styles.devInfo}>
                <div id={styles.devPofile}></div>
                <div id={styles.devName}>{dev.name_kr}</div>
                <div id={styles.devProj}>프로젝트 제목</div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default DevTest;
