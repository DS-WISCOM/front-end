import React, {useState, useEffect} from 'react';
import YoutubeEmbed from '../youtube/YoutubeEmbed.js';
import styles from "../css/ProjectsDetailPage.module.css";
import like from "../images/like.png";
import {useLocation} from "react-router-dom";
import axios from "axios";
import Spinner from "../component/Spinner";
import Pagination from "react-js-pagination";

function ProjectsDetailPage() {
  const location = useLocation();
  const projectId = location.state.data; // 프로젝트 id
  const [project, setProject] = useState([]);
  const [spinner, setSpinner] = useState(null);
  const [developer, setDeveloper] = useState([]);
  const [comment, setComment] = useState([]);
  const [numComment, setNumComment] = useState(0);
  const [name, setName] = useState('');
  const [msg, setMsg] = useState('');
  const [page, setPage] = useState(1);
  const [likeNum, setLikeNum] = useState(0);
  const [onceLike, setOnceLike] = useState(false);

  useEffect(() => {
    setSpinner(true);
    if(projectId) {
      axios.get(`/api/project/${projectId}`).then((response) => {
        setProject(response.data.projects);
        setSpinner(false);
        setComment(response.data.comments);
        setDeveloper(response.data.devsInfo);
        setLikeNum(response.data.projects.likes);
        setNumComment(response.data.projects.comments.length);
      })
      axios.get(`/api/project/${projectId}/alreadyLiked`).then((response) => {
        setOnceLike(response.data.alreadyLiked);
      })
    }
  }, []);

  function addLike() {
    if(projectId) {
      if (onceLike === true) {
        alert('이미 좋아요를 눌렀습니다.');
      }
      else {
        axios.post(`/api/project/${projectId}/addLike`).then((response) => {
          setOnceLike(true);
          axios.get(`/api/project/${projectId}`).then((response) => {
            setLikeNum(response.data.projects.likes);
          })
        })
      }
    }
  }

  async function clickSend() {
    if (name === '' || msg === '') {
      alert('이름 혹은 내용을 정확히 입력해주세요.')
    }
    else if (numComment > 200) {
      alert('최대 댓글 수를 초과하여 지금은 댓글을 달 수 없습니다.')
    }
    else {
      if(projectId) {
        await axios.post(`/api/project/${projectId}/addComment`, {
          writer: `${name}`,
          content: `${msg}`
        })
        axios.get(`/api/project/${projectId}`).then((response) => {
          setComment(response.data.comments)
          setName('');
          setMsg('');
          setNumComment(response.data.projects.comments && response.data.projects.comments.length);
        }
        )
      }
    }
  }

  const handleNameChange = event => {
    setName(event.target.value);
  }

  const handleCommentChange = event => {
    setMsg(event.target.value)
  }

  const handlePageChange = page => {
    setPage(page);
    const params = {page: [page]};
    axios.get(`/api/project/${projectId}`, {params}).then((response) => {
      setComment(response.data.comments);
    })
  }
  
  return (
    <>
    {spinner ? (
      <Spinner />
    ) : ( <>
    {/* 프로젝트 이름, 팀명, 설명 */}
    <div id={styles.projectsdetail}>
      <div id={styles.projectTitle}>{project.name}</div>
      <div id={styles.teamName}>{project.team_name}</div>
      <div id={styles.projectContent}>{project.introduce}</div>
      <div id={styles.line} />
      {/* youtube 영상 */}
      <div id={styles.projectVideo}>
        {project.video === undefined || project.video === "" ? <div id={styles.nonVideo}/> : <YoutubeEmbed embedId={project.video} />}
        {project.ppt && project?.ppt.map((ppt, idx) => {
          return (
            <div key={idx}><img id={styles.projectImg} alt='ppt' src={ppt} /></div>
          )
        })}
      </div>
      <div id={styles.line} />
      {/* Developer */}
      <div id={styles.projectDeveloper}>Developer</div>
      <div id={styles.rowName}>
        {developer === null ? <div /> :
        developer && developer?.map((developer, idx) => {
          return (
            <div className={styles.developerName} key={idx}>{developer.name_kr}</div>
          )
        })}
      </div>
      <div id={styles.line} />
      {/* 좋아요 */}
      <button id={styles.likeBtn} onClick={addLike}>
        <img id={styles.like} alt="like" src={like} />
      </button>
      <div id={styles.likeNumber}>{likeNum}</div>
      {/* 댓글 작성 */}
      {comment.length < 1 ? <div id={styles.comment}>Comments (0)</div>
      : <div id={styles.comment}>Comments ({numComment})</div>}
      <div id={styles.row}>
        <div id={styles.write}>
          <div id={styles.writerName}>
            <input id={styles.writerNameDetail} type="text" placeholder='작성자 이름' value={name} onChange={handleNameChange} />
          </div>
          <div id={styles.writerContent}>
            <textarea cols="130" wrap="hard" id={styles.writerContentDetail} value={msg} onChange={handleCommentChange} placeholder='내용을 작성해주세요.' />
          </div>
        </div>
        <button id={styles.sendBtn} onClick={clickSend}>작성</button>
      </div>
      {comment.length < 1 ? <div /> :
      comment && comment.map((comment, idx) => {
        const date = comment.createdAt.split('T')
        return (
          <div id={styles.comments} key={idx}>
            <div id={styles.nameAndDate}>
              <div id={styles.commentDetailName}>{comment.writer}</div>
              <div id={styles.commentDetailDate}>{date[0]}</div>
            </div>
            <div id={styles.commentDetailContent}>{comment.content}</div>
          </div>
        )
      })}
      <div className={styles.commentPagination}>
        {comment.length < 1 || comment === undefined? <div /> :
          <Pagination
            activePage={page}
            itemsCountPerPage={3}
            totalItemsCount={project.comments && project.comments.length}
            pageRangeDisplayed={5}
            prevPageText={"‹"}
            nextPageText={"›"}
            onChange={handlePageChange}
          />
        }
      </div>
    </div>
    </> )}
    </>
  )
}

export default ProjectsDetailPage
