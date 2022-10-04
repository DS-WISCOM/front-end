import React, { useCallback, useEffect, useState } from "react";
import styles from "../css/LandingPage.module.css";
import $ from "jquery";
import axios from "axios";

function LandingPage() {
  const [developers, setDevelopers] = useState([]);

  $(() => {
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 100);
  });

  const scrollSectionEvent = useCallback(() => {
    let winScrollTop;
    let section = $("#title");
    let sectionOffsetTop;
    let sectionHeight;
    let sectionOffsetBottom;

    const setProperty = () => {
      winScrollTop = $(window).scrollTop();
      sectionOffsetTop = section.offset()?.top;
      sectionHeight = section.height();
      sectionOffsetBottom = sectionOffsetTop + sectionHeight;
    };

    const inSection = () => {
      setProperty();

      if (
        winScrollTop >= sectionOffsetTop &&
        winScrollTop <= sectionOffsetBottom
      ) {
        // active css 추가
        document.getElementById("posterBox")?.classList.add(`${styles.active}`);
      } else if (winScrollTop > sectionOffsetBottom) {
        document.getElementById("posterBox")?.classList.add(`${styles.active}`);
      }
    };

    const init = () => {
      setProperty();
    };

    $(window).scroll(() => {
      inSection();
    });

    $(window).resize(() => {
      inSection();
    });

    init();
  }, []);

  useEffect(() => {
    $(window).scroll(() => {
      scrollSectionEvent();
    });
  }, [scrollSectionEvent]);

  useEffect(() => {
    axios.get(`/api/developer/total`).then((response) => {
      if (response.data.success) {
        setDevelopers(
          response.data.DeveloperList.map((developer) => {
            return developer.name_kr;
          })
        );
      } else {
        console.log("developer list not found");
      }
    });
  }, []);

  const developerList = developers.map((developer, idx) => {
    return <div className={styles.person} key={idx}>{developer}</div>;
  });

  return (
    <>
      <div id={styles.stars} />
      <div id={styles.stars2} />
      <div id={styles.stars3} />
      <div id={"pageContainer"} />

      <div id="title" className={styles.title}>
        <p>Leading Women</p>
        <p>Archiving Developer</p>
        <br />
        <p>Duksung Computer Engineering</p>
        <p>32nd Graduation Exhibition</p>
        <p>WISCOM</p>
      </div>
      <div
        className={styles.titleContainer}
        id={"posterBox"}
        style={{ marginTop: "200px" }}
      >
        <div id={styles.posterText}>
          <p>WISCOM 관련 TEXT 들어갈 예정</p>
        </div>
        <div id={styles.poster}>
          <img
            src={require("../images/dummy-poster.png")}
            width={newFunction()}
            height={"600px"}
          />
        </div>
      </div>
      <div id={styles.contentContainer}>
        <div id={styles.contentTitle}>
          2022 덕성여자대학교 컴퓨터공학전공 제32회 졸업전시회 WISCOM
        </div>
        <div className={styles.contentRow}>
          <div className={styles.text}>지도교수</div>
          <section className={styles.nameList}>
            <div className={styles.person}>박우창</div>
            <div className={styles.person}>이주영</div>
            <div className={styles.person}>최승훈</div>
            <div className={styles.person}>유견아</div>
            <div className={styles.person}>이경미</div>
          </section>
        </div>
        <div className={styles.contentRow}>
          <div className={styles.text}>졸업전시준비위원회</div>
          <div
            className={styles.nameList}
            style={{ display: "flex", flexDirection: "column" }}
          >
            <div
              className={styles.person}
              style={{ display: "block", width: "100%", marginBottom: "36px" }}
            >
              위원장 김은서
            </div>
            <div className={styles.developerList} style={{ width: "400px" }}>
              <div className={styles.person}>김수빈</div>
              <div className={styles.person}>신하늘</div>
              <div className={styles.person}>권희원</div>
              <div className={styles.person}>김혜수</div>
              <div className={styles.person}>문서연</div>
              <div className={styles.person}>유영주</div>
              <div className={styles.person}>임예진</div>
              <div className={styles.person}>홍수연</div>
              <div className={styles.person}>황성민</div>
              <div className={styles.person}>김가빈</div>
              <div className={styles.person}>김지민</div>
            </div>
          </div>
        </div>
        <div className={styles.contentRow} style={{ marginBottom: "200px" }}>
          <div className={styles.text}>개발자</div>
          <div
            className={styles.nameList}
            style={{ display: "flex", flexDirection: "column" }}
          >
            <div className={styles.developerList}>
              {developerList}
              {developerList}
              {developerList}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default LandingPage;
function newFunction() {
  return "400px";
}
