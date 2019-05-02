import React from 'react';
import { Link } from 'react-router-dom';
import ProjectCard from '../card'
import './projects-list.scss'

export const projects = [
  {
    id: 'briefly',
    live: true,
    development: false,
    title: "Briefly",
    subtitle: "Get briefed, on the fly.",
    webURL: "",
    imageURL: "www.morrisonkey.com"
  },
  {
    id: 'invision-teamweek',
    live: true,
    development: false,
    title: "InVision Teamweek",
    subtitle: "The InVision staff hit the road.",
    webURL: "",
    imageURL: "www.morrisonkey.com"
  },
  {
    id: 'sound-cloud-fan-funding',
    live: true,
    development: false,
    title: "Sound Cloud Fan-Funded Content",
    subtitle: "Back your favorite artists and enjoy more content from them.",
    webURL: "",
    imageURL: "www.morrisonkey.com"
  },
  {
    id: 'reincarnage',
    live: true,
    development: true,
    title: "Reincarnage",
    subtitle: "They say 'You Are What You Eat', but in this game You Are What Eats You.",
    webURL: "",
    imageURL: "www.morrisonkey.com"
  },
  {
    id: 'smart-people',
    live: false,
    development: false,
    title: "Smart People",
    subtitle: "Language learning camp brought to your phone.",
    webURL: "",
    imageURL: "www.morrisonkey.com"
  },
  {
    id: 'leadfeeder',
    live: true,
    development: true,
    title: "Leadfeeder",
    subtitle: "Programming a SAAS: The Leadfeeder B2B sales lead generator.",
    webURL: "www.leadfeeder.com",
    imageURL: "www.leadfeeder.com"
  },
  {
    id: 'nsr-invest',
    live: false,
    development: true,
    title: "NSR Invest",
    subtitle: "Developing NSR Invest's branding, site, and video learning platform.",
    webURL: "www.nsrinvest.com",
    imageURL: "www.morrisonkey.com"
  },
  {
    id: 'nycda',
    live: false,
    development: false,
    title: "New York Code & Design Academy",
    subtitle: "Developing an online student and administrator platform for courses.",
    webURL: "www.nycda.com",
    imageURL: "www.morrisonkey.com"
  },
  {
    id: 'imperative',
    live: false,
    development: false,
    title: "Imperative Social Purpose Platform",
    subtitle: "Developing a social-media platform as a tool for encouragement and helping others find purpose in their careers.",
    webURL: "",
    imageURL: "www.morrisonkey.com"
  },
]

class ProjectList extends React.Component {
  render () {

    const shownProjects = projects.filter((el) => el.live !==false)

    const projectElements = shownProjects.map((el, i) => {
      return (
        <Link to={`/selected-work/${el.id}`} key={el.id}>
          <ProjectCard data={el}/>
        </Link>
      )
    });
    
    return (
      <div className="projects">
        <h1 className="projects-title">Selected Work</h1>
        <div className="projects-list">
          {projectElements}
        </div>
      </div>
    )
  }
}

export default ProjectList;
