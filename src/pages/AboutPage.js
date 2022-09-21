import React from 'react';
import styles from '../css/AboutPage.module.css';

function AboutPage() {
  return (
    <>
    
      <div className={styles.titleContainer}>
        <div className={styles.title}>
        ABOUT COMPUTER ENGINEERING
        </div>
      </div>
      
      <div className={styles.contentContainer}>
        <div className={styles.aboutContainer}>
          <div className={styles.aboutTitle}>창의적인 사고와 실무능력 배양</div>
          <p className={styles.aboutContent}>논리적인 사고력과 창의성을 강조하는 교육과 교과내용을 통해 단순 지식에 그치지 않고 이를 컴퓨터 정보통신 등 IT 산업 전반의 실무 능력에 적용하는 능력을 배양한다.</p>
          <div className={styles.aboutTitle}>엄격하고 심도 있는 교과 관리</div>
          <p className={styles.aboutContent}>심화되는 경쟁 사회에서 자기 위치를 확실히 지킬 수 있는 여성 전문 인력의 배양을 위해 책임있는 강의 준비를 하며 교과목의 평가는 공정하고 엄격하게 한다.</p>
          <div className={styles.aboutTitle}>전문인력으로서의 장인정신 배양</div>
          <p className={styles.aboutContent}>전공 분야에 대한 지식과 리더십 습득을 기반으로 직업인으로서 가져야할 장인정신을 배양하여, 자신의 존재 가치를 확인할 수 있는 여성 전문인력을 배양한다.</p>
        </div>
      
        <div className={styles.professorContainer}>
          <div className={styles.professorCard}>
            {/* <div className={styles.professorImage} /> */}
            <p className={styles.professorName}>박우창 교수님</p>
            <p className={styles.professorMajor}>전산과학(데이터베이스)</p>
          </div>
          <div className={styles.professorCard}>
            {/* <div className={styles.professorImage} /> */}
            <p className={styles.professorName}>이주영 교수님</p>
            <p className={styles.professorMajor}>컴퓨터공학(알고리즘)</p>
          </div>
          <div className={styles.professorCard}>
            {/* <div className={styles.professorImage} /> */}
            <p className={styles.professorName}>유견아 교수님</p>
            <p className={styles.professorMajor}>인공지능</p>
          </div>
          <div className={styles.professorCard}>
            {/* <div className={styles.professorImage} /> */}
            <p className={styles.professorName}>최승훈 교수님</p>
            <p className={styles.professorMajor}>전산과학(소프트웨어공학)</p>
          </div>
          <div className={styles.professorCard}>
            {/* <div className={styles.professorImage} /> */}
            <p className={styles.professorName}>이경미 교수님</p>
            <p className={styles.professorMajor}>전산학(지능형미디어)</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default AboutPage