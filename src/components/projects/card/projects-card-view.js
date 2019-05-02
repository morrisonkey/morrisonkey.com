import React from 'react';
import './projects-card.scss';

const ProjectCard = (props) => {
  const {title, skill, description, darkColor, imageURL} = props.data
  return (
    <div className="project-card">
      <div class="project-card-text">
        <h2 className="project-card-title">{title}</h2>
        <h5 className="project-card-skill">{skill}</h5>
        <p className="project-card-description">{description}</p>
        <a className="project-card-link">View Project</a>
      </div> 
      <div className="project-card-image" style={{background: darkColor}}>
        <div className="project-card-image-filter"></div>
      </div>
    </div>
  )
}

export default ProjectCard;
