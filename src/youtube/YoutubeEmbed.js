import React from 'react'
import PropTypes from 'prop-types'
import styles from "../css/ProjectsdetailPage.module.css"

const YoutubeEmbed = ({embedId}) => (
  <div id={styles.videoResponsive}>
    <iframe 
      width="753"
      height="380"
      src={`https://www.youtube.com/embed/${embedId}`}
      frameBorder="0"
      allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embed Youtube Video"
    />
  </div>
)

YoutubeEmbed.propTypes = {
  embedId: PropTypes.string.isRequired
}

export default YoutubeEmbed
