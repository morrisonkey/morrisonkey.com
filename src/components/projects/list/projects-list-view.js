import React from 'react';
import ReactPageScroller from "react-page-scroller";
import ProjectCard from '../card'
import './projects-list.scss'

export const projects = [
  {
    id: 'briefly',
    live: true,
    skill: "WEB DESIGN",
    title: "Briefly App",
    description: "Case Study - A solution for people who can't find the time to read full articles but still want to stay up to date. Briefly offers detailed summaries of trending articles. Responsive prototypes created in Sketch.",
    linkText: "VIEW PROTOTYPE",
    linked: true,
    darkColor: "#6D80A4",
    lightColor: "",
    imageURL: true
  },
  {
    id: 'teamweek',
    live: true,
    skill: "ANIMATIONS",
    title: "Team Week",
    description: "Skill Showcase - Using InVision Studio, I created this microsite: an example of an internal company teaser for an employee work-away holiday. The company I focused on, InVisionApp Inc. themselves.",
    linkText: "VIEW PROTOTYPE",
    linked: true,
    darkColor: "#FF3468",
    lightColor: "",
    imageURL: true
  },
  {
    id: 'soundcloud',
    live: true,
    skill: "FEATURE DESIGN",
    title: "Fan Funding",
    description: "Case Study - Designing a new feature for an existing product. Focusing on SoundCloud, I proposed a way to back your favorite artists and enjoy more content from them.",
    linkText: "VIEW PROTOTYPE",
    linked: true,
    darkColor: "#FE3903",
    lightColor: "",
    imageURL: true
  },
  {
    id: 'reincarnage',
    live: true,
    skill: "GAME DESIGN",
    title: "Reincarnage",
    description: "Built in one week using Javascript and presented at Microsoft for NYC Summer Games Forum. A virus is using your body to climb it's way to the top of the food chain. Help it along in this sadistically fun 2D game.",
    linkText: "PLAY ONLINE NOW",
    linked: true,
    darkColor: "#41AFEA",
    lightColor: "",
    imageURL: true
  },
  {
    id: 'leadfeeder',
    live: true,
    skill: "DEVELOPMENT",
    title: "Leadfeeder",
    description: "Programming a SAAS: The Leadfeeder B2B sales lead generator. In 2018 I worked with the design and development team at Leadfeeder to add new features for their web applications.",
    linkText: "GO TO WEBSITE",
    linked: true,
    darkColor: "#775AB7",
    lightColor: "",
    imageURL: true
  },
  {
    id: 'smart-people',
    live: false,
    skill: "MOBILE APP DESIGN",
    title: "Smart People",
    description: "Language learning camp brought to your phone.",
    linkText: "VIEW PROJECT",
    linked: false,
    darkColor: "#28BA9B",
    lightColor: "",
    imageURL: false
  },
  {
    id: 'nsr-invest',
    live: false,
    skill: "BRAND DESIGN",
    title: "NSR Invest",
    description: "Developing NSR Invest's branding, site, and video learning platform.",
    linkText: "VIEW PROJECT",
    linked: false,
    darkColor: "#FBC24A",
    lightColor: "",
    imageURL: false
  },
  {
    id: 'nycda',
    live: false,
    skill: "DEVELOPMENT",
    title: "New York Code & Design Academy",
    description: "Developing an online student and administrator platform for courses.",
    linkText: "VIEW PROJECT",
    linked: false,
    darkColor: "#FECB09",
    lightColor: "",
    imageURL: false
  },
  {
    id: 'imperative',
    live: false,
    skill: "DEVELOPMENT",
    title: "Imperative Social Purpose Platform",
    description: "Developing a social-media platform as a tool for encouragement and helping others find purpose in their careers.",
    linkText: "VIEW PROJECT",
    linked: false,
    darkColor: "#5564A8",
    lightColor: "",
    imageURL: false
  },
]

class ProjectList extends React.Component {
  render () {

    const shownProjects = projects.filter((el) => el.live !==false)

    const projectElements = shownProjects.map((el, i) => {
      return (
        <ProjectCard data={el} key={el.id}/>
      )
    });
    
    return (
      <div className="projects">
        <h4 className="projects-title">SELECTED WORKS</h4>
        <div className="projects-list">
          <ReactPageScroller
            animationTimer={800}
            transitionTimingFunction={"ease-out"}
            ref={c => this.reactPageScroller = c}
          >
            {projectElements}
          </ReactPageScroller>
        </div>
      </div>
    )
  }
}

export default ProjectList;
