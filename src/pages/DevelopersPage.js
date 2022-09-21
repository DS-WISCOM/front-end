import React from "react";
import Devtest from "../component/Devtest";
import styles from "../css/DevelopersPage.module.css";

function DevelopersPage() {
  return (
    <div className={styles.developersPage}>
      <Devtest />
      <Devtest />
      <Devtest />
    </div>
  );
}

export default DevelopersPage;
