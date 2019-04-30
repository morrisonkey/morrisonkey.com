import React from 'react';
import SmallButton from '../../utils/button/small'

const ProjectCard = (props) => {
  const {title, subtitle, imageURL} = props.data
  return (
    <div className="projects-list-card">
      <h2>{title}</h2> 
      <p>{subtitle}</p>
      <SmallButton onClick={props.hideProject} text="Click to filter"/>
    </div>
  )
}

export default ProjectCard;
