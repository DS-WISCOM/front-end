import React, {useState, useEffect} from 'react'
import YoutubeEmbed from '../youtube/YoutubeEmbed.js'
import styles from "../css/ProjectsdetailPage.module.css"
import like from "../images/like.png"
import dummyPPT from '../images/dummy-ppt.PNG'
import arrowLeft from '../images/arrowLeft.png'
import arrowRight from '../images/arrowRight.png'
import {useLocation} from "react-router-dom";
import axios from "axios";

function ProjectsDetailPage() {
  const location = useLocation();
  const projectId = location.state.data; // 프로젝트 id
  const [project, setProject] = useState([]);
  const [likeNum, setLikeNum] = useState(0)

  useEffect(() => {
    // console.log(projectId)
    if(projectId) {
      axios.get(`/api/project/${projectId}`).then((response) => {
        setProject(response.data.projects);
        // console.log(response.data.projects);
      })
    }
  }, []);

  const clickSend = () => {
    alert('gg')
  }

  return (
    <div id={styles.projectsdetail}>
      <div id={styles.projectTitle}>{project.name}</div>
      <div id={styles.teamName}>{project.team_name}</div>
      <div id={styles.projectContent}>{project.introduce}</div>
      <div id={styles.line} />
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
      <div id={styles.line} />
      <div id={styles.projectDeveloper}>Developer</div>
      {/*돌릴거임*/}
      <div id={styles.rowName}>
        <div className={styles.developerName}>신컴공</div>
        <div className={styles.developerName}>권컴공</div>
        <div className={styles.developerName}>유컴공</div>
        <div className={styles.developerName}>홍컴공</div>
      </div>
      <div id={styles.line} />
      <img id={styles.like} alt="like" src={like} />
      <div id={styles.comment}>Comments ({likeNum})</div>
      <div id={styles.row}>
        <div id={styles.write}>
          <div id={styles.writerName}>
            <input id={styles.writerNameDetail} type="text" placeholder='작성자 이름' />
          </div>
          <div id={styles.writerContent}>
            <textarea id={styles.writerContentDetail} placeholder='내용을 작성해주세요.' />
          </div>
        </div>
        <button id={styles.sendBtn} onClick={clickSend}>작성</button>
      </div>
      <div id={styles.comments}>
        <div id={styles.nameAndDate}>
          <div id={styles.commentDetailName}>김덕성</div>
          <div id={styles.commentDetailDate}>2022.09.28</div>
        </div>
        <div id={styles.commentDetailContent}>너무 마음에 드는 아이디어네요!</div>
      </div>
      <div id={styles.page}>
        <button className={styles.arrowBtn} onClick={clickSend}>
          <img id={styles.arrow} alt='왼쪽 화살표' src={arrowLeft} />
        </button>
        <div className={styles.number}>1</div>
        <div className={styles.number}>2</div>
        <div className={styles.number}>3</div>
        <div className={styles.number}>4</div>
        <div className={styles.number}>5</div>
        <button className={styles.arrowBtn} onClick={clickSend}>
          <img id={styles.arrow} alt='오른쪽 화살표' src={arrowRight} />
        </button>
      </div>
    </div>
  )
}

export default ProjectsDetailPage
