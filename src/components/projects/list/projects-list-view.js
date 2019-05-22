import React from 'react';
import ReactPageScroller from "react-page-scroller";
import ProjectCard from '../card'
import './projects-list.scss'
import downArrow from '../../../assets/logos/arrow-down.png'

export const projects = [
  {
    id: 'filterbuds',
    live: true,
    skill: "APP DESIGN",
    title: "Filter Buds",
    description: "Client Project - Working with Hearable Labs in Berlin, we performed research to define their target-user and designed a user-friendly mobile control center for their augmented audio ear buds.",
    linkText: "READ MORE",
    linked: true,
    darkColor: "#4AAF96",
    lightColor: "",
    imageURL: true
  },
  {
    id: 'briefly',
    live: true,
    skill: "WEB DESIGN",
    title: "Briefly App",
    description: "Case Study - A solution for people who can't find the time to read full articles but still want to stay up to date. Briefly offers detailed summaries of trending articles. Responsive prototypes created in Sketch.",
    linkText: "READ MORE",
    linked: true,
    darkColor: "#6D80A4",
    lightColor: "",
    imageURL: true
  },
  {
    id: 'teamweek',
    live: true,
    skill: "ANIMATIONS",
    title: "InVision Studio",
    description: "Skill Showcase - Using InVision Studio, I created this microsite: an example of an internal company teaser for an employee work-away holiday. The company I focused on, InVisionApp Inc. themselves.",
    linkText: "READ MORE",
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
    id: 'nsrinvest',
    live: true,
    skill: "BRAND DESIGN",
    title: "NSR Invest",
    description: "Logo, site, and brand marketing: NSR Invest. I developed their full site including CMS video platform and helped design logos and company marketing merchandise during their launch.",
    linkText: "GO TO WEBSITE",
    linked: true,
    darkColor: "#FF665B",
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

    projectElements.unshift(
      <div className="intro">
        <div>
          <p>Hello<span class="coral-text">.</span> My name is Key<span class="coral-text">.</span> I<span class="coral-text">'</span>m a<span class="coral-text">...</span></p>
          <p>Designer <span className="coral-text">|</span> Developer <span className="coral-text">|</span> Mentor</p>
          <br/>
          <p>Check out my portfolio below and<span><a href="mailto:mr.morrison.key@gmail.com" className="coral-text"> email me </a></span>if you want to work together<span class="coral-text">.</span></p>
        </div>
        <img className="down-arrow" src={downArrow}/>
      </div>
    )
    
    return (
      <div className="projects">
        <h4 className="projects-title">SELECTED WORKS</h4>
        <div className="projects-list">
          <ReactPageScroller
            animationTimer={900}
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
