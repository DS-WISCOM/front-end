import React from "react";
import styles from "../css/Devtest.module.css";

const DevTest = () => {
  return (
    <div className={styles.DevelopersdetailPage}>
      <div className={styles.devList}>
        <div className={styles.devCard}>
          <div className={styles.devPofile}></div>
          <div className={styles.devName}>본인이름</div>
          <div className={styles.devProj}>본인 프로젝트</div>
        </div>
        <div className={styles.devCard}>
          <div className={styles.devPofile}></div>
          <div className={styles.devName}>본인이름</div>
          <div className={styles.devProj}>본인 프로젝트</div>
        </div>
        <div className={styles.devCard}>
          <div className={styles.devPofile}></div>
          <div className={styles.devName}>본인이름</div>
          <div className={styles.devProj}>본인 프로젝트</div>
        </div>
        <div className={styles.devCard}>
          <div className={styles.devPofile}></div>
          <div className={styles.devName}>본인이름</div>
          <div className={styles.devProj}>본인 프로젝트</div>
        </div>
      </div>
    </div>
  );
};

export default DevTest;
