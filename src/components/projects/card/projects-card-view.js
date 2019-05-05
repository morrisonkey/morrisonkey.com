import React from 'react';
import { Link } from 'react-router-dom';
import bird from '../../../assets/images/bird-sprite.png';
import briefly from '../../../assets/images/briefly.png';
import largeCloud from '../../../assets/images/cloud-large.png';
import leadfeeder from '../../../assets/images/leadfeeder.png';
import mediumCloud from '../../../assets/images/cloud-medium.png';
import reincarnage from '../../../assets/images/reincarnage.png';
import smallCloud from '../../../assets/images/cloud-small.png';
import soundcloud from '../../../assets/images/soundcloud.png';
import teamweek from '../../../assets/images/teamweek.gif';
import './projects-card.scss';

const ProjectCard = (props) => {
  const {title, skill, description, darkColor, id, imageURL, linked, linkText} = props.data

  let bg = darkColor;
  let img = '';

  if (imageURL) {
    if (id === 'briefly') {
      bg = `url(${briefly}) no-repeat center center`;
      img = briefly;
    } else if (id === 'teamweek') {
      bg = `url(${teamweek}) no-repeat center center`;
      img = teamweek;
    } else if (id === 'soundcloud') {
      bg = `url(${soundcloud}) no-repeat center center`;
      img = soundcloud;
    } else if (id === 'reincarnage') {
      bg = `url(${reincarnage}) no-repeat center center`;
      img = reincarnage;
    } else if (id === 'leadfeeder') {
      bg = `url(${leadfeeder}) no-repeat center center`;
      img = leadfeeder;
    }
  }

  return (
    <div className="project-card-container">
      <div className="project-card">
        <div class="project-card-text">
          <h2 className="project-card-title">{title}</h2>
          <h5 className="project-card-skill">{skill}</h5>
          <p className="project-card-description">{description}</p>
          {linked && <Link to={id} target="_blank" className="project-card-link">{linkText}</Link>}
        </div> 

        <Link to={`/selected-work/${id}`}>
          <div className="project-card-image" style={{background: bg}}>
            <img src={img} className="project-card-image" alt="img" />
            {id ==='reincarnage' &&
              <div className="reincarnage">
                <img src={largeCloud} className="reincarnage-image reincarnage-large-cloud" alt="large-cloud" />
                <img src={mediumCloud} className="reincarnage-image reincarnage-medium-cloud" alt="medium-cloud" />
                <img src={smallCloud} className="reincarnage-image reincarnage-small-cloud" alt="small-cloud" />
                <div className="reincarnage-image reincarnage-bird" style={{background: `url(${bird})`}}></div>
              </div>
            }
          </div>
        </Link>
      </div>
    </div>
  )
}

export default ProjectCard;
