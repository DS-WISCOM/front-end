import axios from "axios";
import React, { useEffect, useState } from "react";
import styles from "../css/DevelopersdetailPage.module.css";

const DevelopersdetailPage = (props) => {
  const testId = "20180122";
  const [developer, setDeveloper] = useState([]);

  useEffect(() => {
    axios.get(`/api/developer/${testId}`).then((response) => {
        if(response.data.success) {
          setDeveloper(response.data.developer[0]);        
        }
    })
  }, [testId]);

  useEffect(() => {
    axios.get(`/api/developer/${developer.project_id}`)
  })

  return ( developer && 
    <>
      <div id={styles.pageContainer}>
        <div id={styles.imageContainer}>
          <img id={styles.developerImage} src={developer.img} alt={`${developer.name_kr} 개발자 프로필 사진`} />
          <div id={styles.developerName}>{developer.name_kr}&nbsp;&nbsp;</div>
          <div id={styles.developerNameEng}>{developer.name_eng}</div>
        </div>
        <div id={styles.rightContainer}>
          <div id={styles.developerContainer}>
            <div id={styles.contact}>Contact&nbsp;&nbsp;</div>
            <div id={styles.email}>{developer.email}</div>
            <div id={styles.impression}>
              {developer.impression}
            </div>
          </div>
          <div id={styles.projectContainer}>
            <div id={styles.projectLeftContainer}>
              <div id={styles.project}>Project</div>
              <div id={styles.projectName}>프로젝트명</div>
            </div>
            <div id={styles.projectImage} />
          </div>
        </div>
      </div>
    </>
  );
};

export default DevelopersdetailPage;
