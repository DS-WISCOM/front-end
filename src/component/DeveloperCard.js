import React from "react";
import styles from "../css/Card.module.css";
import {Link} from "react-router-dom";

const DeveloperCard = (props) => {
  const data = props.data;
  return (
      <Link to={'/developers/detail'} state={{ data: data && data.developer_id }} className={styles.devCard}>
        <img src={data.img} className={styles.image}></img>
        <div className={styles.mainText}>{data.name_kr}</div>
        <div className={styles.subText}>{data.project_id.name}</div>
      </Link>
  )
}

export default DeveloperCard;
