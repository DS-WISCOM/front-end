import React from "react";
import styles from "../css/Card.module.css";
import {Link} from "react-router-dom";

const ProjectCard = (props) => {
  const data = props.data;

  return (
    <Link to={'/projects/detail'} state={{ data: data && data._id }} className={styles.devCard}>
      <img src={data.img} className={styles.image} />
      <div className={styles.mainText}>{data.name}</div>
      <div className={styles.subText}>{data.team_name}</div>
    </Link>
  )
}

export default ProjectCard;

