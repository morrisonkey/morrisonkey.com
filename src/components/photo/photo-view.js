import React from 'react';
import img1 from '../../assets/images/img-2.jpg'
import img2 from '../../assets/images/img-7.jpg'
import img3 from '../../assets/images/img-1.jpg'
import '../projects/card/projects-card.scss';

const ProjectCard = (props) => {
  return (
    <div>
      <div className="project-card">
        <div class="project-card-text">
          <h2 className="project-card-title">&nbsp; &nbsp; &nbsp; Hanoi</h2>
          <h5 className="project-card-skill">&nbsp; &nbsp; Vietnam</h5>
        </div> 
        <div className="project-card-image">
          <img src={img1} alt="img" />
        </div>
      </div>
      <div className="project-card">
        <div class="project-card-text">
          <h2 className="project-card-title">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Bali</h2>
          <h5 className="project-card-skill">&nbsp; &nbsp; Indonesia</h5>
        </div> 
        <div className="project-card-image">
          <img src={img2} alt="img" />
        </div>
      </div>
      <div className="project-card">
        <div class="project-card-text">
          <h2 className="project-card-title">Grand Canaria</h2>
          <h5 className="project-card-skill">&nbsp; &nbsp; Spain</h5>
        </div> 
        <div className="project-card-image">
          <img src={img3} alt="img" />
        </div>
      </div>
    </div>
  )
}

export default ProjectCard;
