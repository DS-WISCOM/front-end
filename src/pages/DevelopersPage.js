import React from "react";
import DevelopersdetailPage from "./DevelopersdetailPage";
import styles from "../css/DevelopersPage.module.css";

function DevelopersPage() {
  return (
    <div className={styles.developersPage}>
      <DevelopersdetailPage />
      <DevelopersdetailPage />
      <DevelopersdetailPage />
    </div>
  );
}

export default DevelopersPage;
