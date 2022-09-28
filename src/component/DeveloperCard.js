import React from "react";
import styles from "../css/Card.module.css";

const DeveloperCard = () => {
  return (
    <div className={styles.devList}>
      <div className={styles.devCard}>
        <div className={styles.image}></div>
        <div className={styles.mainText}>본인이름</div>
        <div className={styles.subText}>본인 프로젝트</div>
      </div>
    </div>
  )
}

export default DeveloperCard;
