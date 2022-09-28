import React from "react";
import Devtest from "../component/Devtest";
import styles from "../css/DevelopersPage.module.css";

function DevelopersPage() {
  return (
    <div id={styles.developersPage}>
      <div id={styles.developersPageTitle}>DEVELOPERS</div>
      <Devtest />
    </div>
  );
}

export default DevelopersPage;
