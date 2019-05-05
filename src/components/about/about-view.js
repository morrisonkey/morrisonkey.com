import React from 'react';
import ReactPageScroller from "react-page-scroller";
import { Link } from 'react-router-dom';
import '../projects/list/projects-list.scss';
import '../projects/card/projects-card.scss';
import './about.scss'
import img from '../../assets/images/me-black.jpg';

class About extends React.Component {
  render () {
    return (
      <div className="projects about">
        <div className="projects-list">
            <div className="project-card-container container-limitless">
              <div className="project-card">
                <div class="project-card-text">
                  <h2 className="project-card-title">Morrison Key</h2>
                  <h5 className="about-skill project-card-skill">DESIGNER, DEVELOPER, MENTOR</h5>
                  <p className="project-card-description">One horn short of a unicorn. I am currently a UX Designer seeking new opportunities in Berlin. In the past I have been a travelling Developer and Coding Teacher / Mentor in Los Angeles and New York.</p>
                  <Link to="mailto:mr.morrison.key@gmail.com" target="_blank" className="project-card-link">EMAIL ME</Link>
                </div> 
                <div className="no-hover project-card-image">
                  <img src={img} alt="img" />
                </div>
              </div>
            </div>
        </div>
      </div>
    )
  }
}

export default About;