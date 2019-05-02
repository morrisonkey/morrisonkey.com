import React from 'react';
import './projects-card.scss';

const ProjectCard = (props) => {
  const {title, subtitle, imageURL, development} = props.data
  return (
    <div className="projects-list-card">
      <h2 className="title">{title}</h2>
      <div></div>
    </div>
  )
}

export default ProjectCard;
