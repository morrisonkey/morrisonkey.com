import React from 'react';
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
                  <h2 className="project-card-title">
                    Morr
                    <span class="color-changing">i</span>
                    son Key
                  </h2>
                  <h5 className="about-skill project-card-skill white-text">
                    <span class="color-changing-1">DESIGN</span>ER |
                    <span class="color-changing-2"> DEVELOP</span>ER |
                    <span class="color-changing-3"> MENTOR</span>
                  </h5>
                  <p className="project-card-description">One horn short of a unicorn. I am currently a UX Designer seeking new opportunities. In the past I have been a travelling Developer and Coding Teacher / Mentor in Los Angeles and New York.</p>
                  <Link to='/cv' className="project-card-link about-link">VIEW MY CV</Link>
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