import React from 'react';
import bird from '../../../assets/images/bird.png';
import largeCloud from '../../../assets/images/cloud-large.png';
import mediumCloud from '../../../assets/images/cloud-medium.png';
import smallCloud from '../../../assets/images/cloud-small.png';
import './projects-card.scss';

const ProjectCard = (props) => {
  const {title, skill, description, darkColor, id, imageURL} = props.data
  return (
    <div className="project-card">
      <div class="project-card-text">
        <h2 className="project-card-title">{title}</h2>
        <h5 className="project-card-skill">{skill}</h5>
        <p className="project-card-description">{description}</p>
        <a className="project-card-link">View Project</a>
      </div> 
      <div className="project-card-image" style={{background: darkColor}}>
        <div className="project-card-image-filter">
          {id ==='reincarnage' &&
            <div className="reincarnage">
              <img src={largeCloud} className="reincarnage-image reincarnage-large-cloud" alt="large-cloud" />
              <img src={mediumCloud} className="reincarnage-image reincarnage-medium-cloud" alt="medium-cloud" />
              <img src={smallCloud} className="reincarnage-image reincarnage-small-cloud" alt="small-cloud" />
              <img src={bird} className="reincarnage-image reincarnage-bird" alt="bird" />
            </div>
          }
        </div>
      </div>
    </div>
  )
}

export default ProjectCard;
