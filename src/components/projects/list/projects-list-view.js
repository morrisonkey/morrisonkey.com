import React from 'react';
import ProjectCard from '../card'

class ProjectList extends React.Component {
  state = {
    projects:   [
      {
        title: "Briefly",
        subtitle: "Get briefed, on the fly.",
        imageURL: "www.morrisonkey.com"
      },
      {
        title: "InVision Teamweek",
        subtitle: "The InVision staff hit the road.",
        imageURL: "www.morrisonkey.com"
      },
      {
        title: "Smart People",
        subtitle: "Language learning camp brought to your phone.",
        imageURL: "www.morrisonkey.com"
      },
      {
        title: "Sound Cloud Fan-Funded Content",
        subtitle: "Back your favorite artists and enjoy more content from them.",
        imageURL: "www.morrisonkey.com"
      },
      {
        title: "Reincarnage",
        subtitle: "They say 'You Are What You Eat', but in this game You Are What Eats You.",
        imageURL: "www.morrisonkey.com"
      }
    ]
  };

  handleClick = index => {
    console.log('hello');
    const { projects } = this.state;
    this.setState({
      projects: projects.filter((el, i) => i !==index)
    });
  }

  render () {
    const { projects } = this.state;
  
    const projectElements = projects.map((el, i) => {
      return (
        <ProjectCard hideProject={() => this.handleClick(i)} data={el} key={i}/>
      )
    });
    
    return (
      <div className="projects">
        <h1 className="projects-title">Projects</h1>
        <div className="projects-list">
          {projectElements}
        </div>
      </div>
    )
  }
}

export default ProjectList;
