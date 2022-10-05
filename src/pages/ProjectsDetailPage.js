import React, {useState, useEffect} from 'react'
import YoutubeEmbed from '../youtube/YoutubeEmbed.js'
import styles from "../css/ProjectsDetailPage.module.css"
import like from "../images/like.png"
import arrowLeft from '../images/arrowLeft.png'
import arrowRight from '../images/arrowRight.png'
import {useLocation} from "react-router-dom";
import axios from "axios";

function ProjectsDetailPage() {
  const location = useLocation();
  const projectId = location.state.data; // 프로젝트 id
  const [project, setProject] = useState([]);
  const [developer, setDeveloper] = useState([]);

  useEffect(() => {
    // console.log(projectId)
    if(projectId) {
      axios.get(`/api/project/${projectId}`).then((response) => {
        setProject(response.data.projects);
        setDeveloper(response.data.devsInfo);
      })
    }
  }, []);

  async function addLike() {
    if(projectId) {
      const data = await axios.post(`/api/project/${projectId}/addLike`)
      console.log(data)
      axios.get(`/api/project/${projectId}`).then((response) => {
        // setProject(response.data.projects);
        console.log(response.data)
      })
    }
  }

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
        <YoutubeEmbed embedId={project.video} />
        {project.ppt && project?.ppt.map((ppt, idx) => {
          return (
            <div><img id={styles.projectImg} alt='ppt' key={idx} src={ppt} /></div>
          )
        })}
      </div>
      <div id={styles.line} />
      <div id={styles.projectDeveloper}>Developer</div>
      {/*돌릴거임*/}
      <div id={styles.rowName}>
        {developer && developer?.map((developer, idx) => {
          return (
          <div className={styles.developerName} key={idx}>{developer.name_kr}</div>
          )
        })}
      </div>
      <div id={styles.line} />
      <button id={styles.likeBtn} onClick={addLike}>
        <img id={styles.like} alt="like" src={like} />
      </button>
      <div id={styles.comment}>Comments ({project.likes})</div>
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
