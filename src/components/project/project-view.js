import React from 'react';
import { projects } from '../projects/list/projects-list-view';
import SmallButton from '../utils/button/small'
import './project.scss'

const project = (props) => {

  let project = projects.find(proj=>proj.id === props.match.params.id)

  return (
    <div className="project">
      {project.development && <h4>Development Showcase</h4>}
      <h1 className="project-title">
        {project.title}
      </h1>
      <p className="project-subtitle">
        {project.subtitle}
      </p>
      <SmallButton onClick={props.hideProject} text="Go to Website"/>
    </div>
  )
}

export default project;