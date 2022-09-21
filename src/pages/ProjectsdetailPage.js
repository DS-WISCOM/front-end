import React, {useState} from 'react'
import YoutubeEmbed from '../youtube/YoutubeEmbed.js'
import styles from "../css/ProjectsdetailPage.module.css"
import like from "../images/like.png"
import dummyPPT from '../images/background.jpg'

function ProjectsdetailPage() {
  const [likeNum, setLikeNum] = useState(0)

  return (
    <div id={styles.projectsdetail}>
      <div id={styles.projectTitle}>프로젝트 명</div>
      <div id={styles.teamName}>팀 명</div>
      <div id={styles.projectContent}>프로젝트 소개</div>
      <div id={styles.line}></div>
      <div id={styles.projectVideo}>
        <YoutubeEmbed embedId='JoZfq8rEbkg' />
        {/* {dummy.ppt.map((ppt) => {
          return (
            <img className="ppt-img" alt="ppt" src={ppt.img1} />
          )
        })} */}
        <div><img id={styles.projectImg} alt='ppt' src={dummyPPT} /></div>
        <div><img id={styles.projectImg} alt='ppt' src={dummyPPT} /></div>
      </div>
      <div id={styles.line}></div>
      <div id={styles.projectDeveloper}>Developer</div>
      {/*돌릴거임*/}
      <div id={styles.developerName}>권희원</div>
      <div id={styles.line}></div>
      <img id={styles.like} alt="like" src={like} />
      <div id={styles.comment}>Comments ({likeNum})</div>
      <div id={styles.write}>
        <div>
          <div id={styles.writerName}>
            <input id={styles.writerNameDetail} placeholder='작성자 이름'></input>
          </div>
          <div id={styles.writerContent}>
            <textarea id={styles.writerContentDetail} placeholder='내용을 작성해주세요.'></textarea>
          </div>
        </div>
        <div><div id={styles.send}>작성</div></div>
      </div>
    </div>
  )
}

export default ProjectsdetailPage