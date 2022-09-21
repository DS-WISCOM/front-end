import React from 'react'
import styles from "../css/LandingPage.module.css"

function LandingPage() {
  return (
      <>
        <div id={styles.topMargin}/>
        <div id={styles.title}>
          <p>Leading Women</p>
          <p>Archiving Developer</p>
          <br />
          <p>Duksung Computer Engineering</p>
          <p>32nd Graduation Exhibition</p>
          <p>WISCOM</p>
        </div>
        <div style={{marginTop: "200px"}}>
          <div id={styles.posterText}>
            <p>WISCOM 관련 TEXT 들어갈 예정</p>
          </div>
          <div id={styles.poster}>
            <img src={require("../images/dummy-poster.png")} width={"400px"} height={"600px"} />
          </div>
        </div>

      </>
  )
}

export default LandingPage