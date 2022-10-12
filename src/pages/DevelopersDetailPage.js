import axios from "axios";
import React, { useEffect, useState } from "react";
import styles from "../css/DevelopersdetailPage.module.css";
import { useLocation } from "react-router-dom";

const DevelopersDetailPage = (props) => {
  const location = useLocation();
  const developerId = location.state.data;
  const [developer, setDeveloper] = useState([]);

  useEffect(() => {
    // console.log(developerId);
    if (developerId) {
      axios.get(`/api/developer/${developerId}`).then((response) => {
        if (response.data.success) {
          setDeveloper(response.data.developer[0]);
          // console.log(response.data.developer[0]);
        }
      });
    }
  }, []);

  return (
    <>
      <div id={styles.pageContainer}>
        <div id={styles.imageContainer}>
          <img
            id={styles.developerImage}
            src={developer.img}
            alt={`${developer.name_kr} 개발자 프로필 사진`}
          />
          <div id={styles.developerName}>{developer.name_kr}</div>
          <div id={styles.developerNameEng}>{developer.name_eng}</div>
        </div>
        <div id={styles.rightContainer}>
          <div id={styles.developerContainer}>
            <div id={styles.contact}>Contact&nbsp;&nbsp;</div>
            <div id={styles.email}>{developer.email}</div>
            <div id={styles.impression}>{developer.impression}</div>
          </div>
          {developer.project_id && (
            <div id={styles.projectContainer}>
              <div id={styles.projectLeftContainer}>
                <div id={styles.project}>Project</div>
                <div id={styles.projectName}>{developer.project_id.name}</div>
              </div>
              <img id={styles.projectImage} src={developer.project_id.img} />
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default DevelopersDetailPage;
