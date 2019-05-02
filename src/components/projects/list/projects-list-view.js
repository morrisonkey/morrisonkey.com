import React from 'react';
import { Link } from 'react-router-dom';
import ProjectCard from '../card'
import './projects-list.scss'

export const projects = [
  {
    id: 'briefly',
    live: true,
    skill: "WEB DESIGN",
    title: "Briefly",
    description: "Get briefed, on the fly.",
    webURL: "",
    darkColor: "#6D80A4",
    lightColor: "",
    imageURL: "www.morrisonkey.com"
  },
  {
    id: 'invision-teamweek',
    live: true,
    skill: "ANIMATIONS",
    title: "InVision Teamweek",
    description: "The InVision staff hit the road.",
    webURL: "",
    darkColor: "#FF3468",
    lightColor: "",
    imageURL: "www.morrisonkey.com"
  },
  {
    id: 'sound-cloud-fan-funding',
    live: true,
    skill: "FEATURE DESIGN",
    title: "Sound Cloud Fan-Funded Content",
    description: "Back your favorite artists and enjoy more content from them.",
    webURL: "",
    darkColor: "#FE3903",
    lightColor: "",
    imageURL: "www.morrisonkey.com"
  },
  {
    id: 'reincarnage',
    live: true,
    skill: "GAME DESIGN",
    title: "Reincarnage",
    description: "They say 'You Are What You Eat', but in this game You Are What Eats You.",
    webURL: "",
    darkColor: "#41AFEA",
    lightColor: "",
    imageURL: "www.morrisonkey.com"
  },
  {
    id: 'smart-people',
    live: false,
    skill: "MOBILE APP DESIGN",
    title: "Smart People",
    description: "Language learning camp brought to your phone.",
    webURL: "",
    darkColor: "#28BA9B",
    lightColor: "",
    imageURL: "www.morrisonkey.com"
  },
  {
    id: 'leadfeeder',
    live: true,
    skill: "DEVELOPMENT",
    title: "Leadfeeder",
    description: "Programming a SAAS: The Leadfeeder B2B sales lead generator.",
    webURL: "www.leadfeeder.com",
    darkColor: "#31A2C5",
    lightColor: "",
    imageURL: "www.leadfeeder.com"
  },
  {
    id: 'nsr-invest',
    live: false,
    skill: "BRAND DESIGN",
    title: "NSR Invest",
    description: "Developing NSR Invest's branding, site, and video learning platform.",
    webURL: "www.nsrinvest.com",
    darkColor: "#FBC24A",
    lightColor: "",
    imageURL: "www.morrisonkey.com"
  },
  {
    id: 'nycda',
    live: false,
    skill: "DEVELOPMENT",
    title: "New York Code & Design Academy",
    description: "Developing an online student and administrator platform for courses.",
    webURL: "www.nycda.com",
    darkColor: "#FECB09",
    lightColor: "",
    imageURL: "www.morrisonkey.com"
  },
  {
    id: 'imperative',
    live: false,
    skill: "DEVELOPMENT",
    title: "Imperative Social Purpose Platform",
    description: "Developing a social-media platform as a tool for encouragement and helping others find purpose in their careers.",
    webURL: "",
    darkColor: "#5564A8",
    lightColor: "",
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
        <h4 className="projects-title">Selected Work</h4>
        <div className="projects-list">
          {projectElements}
        </div>
      </div>
    )
  }
}

export default ProjectList;
