import React from "react";
import styles from "../css/Navbar.module.css";

const Footer = () => {
  return (
    <div id={styles.footer}>
      <div id={styles.footerContent}>
        서울 도봉구 삼양로144길 33 덕성여자대학교 과학기술대학 컴퓨터공학전공 |
        TEL 02-901-8341
        <br />
        Copyright (c) Computer Language and Literature. All right reserved.
      </div>
      <a
        href="https://www.duksung.ac.kr/computer/main.do"
        id={styles.homepageLink}
      >
        <button id={styles.footerButton}>학과 홈페이지</button>
      </a>
    </div>
  );
};

export default Footer;
