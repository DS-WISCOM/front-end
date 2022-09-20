import React from 'react';
import styles from '../css/DevelopersdetailPage.module.css';

function DevelopersdetailPage() {
  return (
    <>
      <div className={styles.pageContainer}>
        <div className={styles.imageContainer}>
          <div className={styles.developerImage} />
          <div className={styles.developerName}>김덕우&nbsp;&nbsp;</div>
          <div className={styles.developerNameEng}>Kim Dukwoo</div>
        </div>
        <div className={styles.rightContainer}>
          <div className={styles.developerContainer}>
            <div className={styles.contact}>Contact&nbsp;&nbsp;</div>
            <div className={styles.email}>000000@duksung.ac.kr</div>
            <div className={styles.impression}>
              덕성여자대학교 컴퓨터공학전공 졸업작품전시회 WISCOM 홈페이지 제작 중입니다.
              이 박스에는 개발자의 소감이 들어갑니다. 소감을 여러 줄 적어봅시다.
            </div>
          </div>
          <div className={styles.projectContainer}>
            <div className={styles.projectLeftContainer}>
              <div className={styles.project}>Project</div>
              <div className={styles.projectName}>프로젝트명</div>
            </div>
            <div className={styles.projectImage} />
          </div>
        </div>
      </div>
    </>
  )
}

export default DevelopersdetailPage