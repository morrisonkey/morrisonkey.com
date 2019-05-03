import React from 'react';
import bird from '../../../assets/images/bird-sprite.png';
import briefly from '../../../assets/images/briefly.png';
import largeCloud from '../../../assets/images/cloud-large.png';
import leadfeeder from '../../../assets/images/leadfeeder.png';
import mediumCloud from '../../../assets/images/cloud-medium.png';
import smallCloud from '../../../assets/images/cloud-small.png';
import soundcloud from '../../../assets/images/soundcloud.png';
import teamweek from '../../../assets/images/teamweek.gif';
import './projects-card.scss';

const ProjectCard = (props) => {
  const {title, skill, description, darkColor, id, imageURL} = props.data

  let bg = darkColor

  if (imageURL) {
    if (id === 'briefly') {
      bg = `url(${briefly}) no-repeat center center`
    } else if (id === 'soundcloud') {
      bg = `url(${soundcloud}) no-repeat center center`
    } else if (id === 'leadfeeder') {
      bg = `url(${leadfeeder}) no-repeat center center`
    } else if (id === 'teamweek') {
      bg = `url(${teamweek}) no-repeat center center`
    }
  }

  return (
    <div className="project-card">
      <div class="project-card-text">
        <h2 className="project-card-title">{title}</h2>
        <h5 className="project-card-skill">{skill}</h5>
        <p className="project-card-description">{description}</p>
        <a className="project-card-link">VIEW PROJECT</a>
      </div> 
      <div className="project-card-image" style={{background: bg}}>
        {id ==='reincarnage' &&
          <div className="reincarnage">
            <img src={largeCloud} className="reincarnage-image reincarnage-large-cloud" alt="large-cloud" />
            <img src={mediumCloud} className="reincarnage-image reincarnage-medium-cloud" alt="medium-cloud" />
            <img src={smallCloud} className="reincarnage-image reincarnage-small-cloud" alt="small-cloud" />
            <div className="reincarnage-image reincarnage-bird" style={{background: `url(${bird})`}}></div>
          </div>
        }
      </div>
    </div>
  )
}

export default ProjectCard;
