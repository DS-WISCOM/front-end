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
    axios.get(`/api/developer/totalName`).then((response) => {
      if (response.data.success) {
        console.log(response.data.nameList);
        setDevelopers(response.data.nameList);
      } else {
        console.log("developer list not found");
      }
    });
  }, []);

  const developerList = developers.map((developer, idx) => {
    return (
      <div className={styles.person} key={idx}>
        {developer}
      </div>
    );
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
          <p id={styles.text}>
            덕성여자대학교 컴퓨터공학전공의 서른 두 번째 졸업전시회, WISCOM을
            찾아 주신 분들께 진심으로 감사드립니다.
            <br />
            <br />
            1년 남짓한 시간 동안 힘써 달려 온 졸업프로젝트를 마무리하며,
            덕성여자대학교 컴퓨터공학전공에서 32번째 졸업전시회 WISCOM을
            개최합니다. 학생들의 열정과 애정을 담아 가득 담긴 작품을
            감상해주세요.
            <br />
            <br />
            덕성에서의 비상을 마무리함과 동시에 새로운 시작의 길목에 선 학우들의
            전시회에 많은 응원과 격려 부탁드립니다.
            <br />
            <br />
            Carve Out and Fly High!
            <br />
            학생들이 새로운 길을 개척해내고, 더 높은 곳으로 날아오르는 그날을
            고대합니다.
          </p>
        </div>
        <div id={styles.poster}>
          <img
            src={
              "https://wiscom.s3.ap-northeast-2.amazonaws.com/WISCOM_MAIN+POSTER.jpg"
            }
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
          <div className={styles.text}>개발자</div>
          <div
            className={styles.nameList}
            style={{ display: "flex", flexDirection: "column" }}
          >
            <div className={styles.developerList}>{developerList}</div>
          </div>
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
              <div className={styles.person}>유수연</div>
              <div className={styles.person}>유영주</div>
              <div className={styles.person}>임예진</div>
              <div className={styles.person}>홍수연</div>
              <div className={styles.person}>황성민</div>
              <div className={styles.person}>김가빈</div>
              <div className={styles.person}>김지민</div>
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
