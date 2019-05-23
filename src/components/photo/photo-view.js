import React from 'react';
import ReactPageScroller from "react-page-scroller";
import downArrow from '../../assets/logos/arrow-down-1.png'
import img1 from '../../assets/images/img1.jpg';
import img2 from '../../assets/images/img2.jpg';
import img3 from '../../assets/images/img3.jpg';
import img4 from '../../assets/images/img4.jpg';
import img5 from '../../assets/images/img5.jpg';
import img7 from '../../assets/images/img7.jpg';
import img9 from '../../assets/images/img9.jpg';
import img13 from '../../assets/images/img13.jpg';
import img14 from '../../assets/images/img14.jpg';
import img15 from '../../assets/images/img15.jpg';
import img16 from '../../assets/images/img16.jpg';
import img20 from '../../assets/images/img20.jpg';
import img24 from '../../assets/images/img24.jpg';
import '../projects/list/projects-list.scss';
import '../projects/card/projects-card.scss';
import './photo.scss';

class PhotoScroller extends React.Component {
  render () {

    console.log('hello');
    return (
      <div className="projects">
        <h4 className="projects-title white">PHOTOGRAPHS</h4>
        <div className="projects-list">
          <ReactPageScroller
            animationTimer={800}
            transitionTimingFunction={"ease-out"}
            ref={c => this.reactPageScroller = c}
          >
            <div className="intro white">
              <div>
                <p>Working in tech gives me the freedom to pursue two of my other passions<span class="yellow-text">...</span></p>
                <p>Travel and Photography<span class="yellow-text">.</span></p>
                <br/>
                <p>I<span class="yellow-text">'</span>ve shared some images below<span class="yellow-text">.</span> Please browse or click <span><a href="https://www.eyeem.com/u/morrisonkey" target="_blank" className="yellow-text"> here </a></span> to see more<span class="yellow-text">.</span></p>
              </div>
              <img className="down-arrow" src={downArrow}/>
            </div>
            <div className="project-card-container">
              <div className="project-card">
                <div class="width-full project-card-text">
                  <h2 className="width-full project-card-title white">Akureyri</h2>
                  <h5 className="width-full photo-skill project-card-skill">ICELAND</h5>
                </div> 
                <div className="no-hover project-card-image">
                  <img src={img4} className="no-hover project-card-image" alt="img" />
                </div>
              </div>
            </div>
            <div className="project-card-container">
              <div className="project-card">
                <div class="width-full project-card-text">
                  <h2 className="width-full project-card-title white">Cappadocia</h2>
                  <h5 className="width-full photo-skill project-card-skill">TURKEY</h5>
                </div> 
                <div className="no-hover project-card-image">
                  <img src={img3} className="no-hover project-card-image" alt="img" />
                </div>
              </div>
            </div>
            <div className="project-card-container">
              <div className="project-card">
                <div class="width-full project-card-text">
                  <h2 className="width-full project-card-title white">Hanoi City</h2>
                  <h5 className="width-full photo-skill project-card-skill">VIETNAM</h5>
                </div> 
                <div className="no-hover project-card-image">
                  <img src={img2} className="no-hover project-card-image" alt="img" />
                </div>
              </div>
            </div>
            <div className="project-card-container">
              <div className="project-card">
                <div class="width-full project-card-text">
                  <h2 className="width-full project-card-title white">Anchorage</h2>
                  <h5 className="width-full photo-skill project-card-skill">ALASKA</h5>
                </div> 
                <div className="no-hover project-card-image">
                  <img src={img24} className="no-hover project-card-image" alt="img" />
                </div>
              </div>
            </div>
            <div className="project-card-container">
              <div className="project-card">
                <div class="width-full project-card-text">
                  <h2 className="width-full project-card-title white">Gran Canaria</h2>
                  <h5 className="width-full photo-skill project-card-skill">SPAIN</h5>
                </div> 
                <div className="no-hover project-card-image">
                  <img src={img1} className="no-hover project-card-image" alt="img" />
                </div>
              </div>
            </div>
            <div className="project-card-container">
              <div className="project-card">
                <div class="width-full project-card-text">
                  <h2 className="width-full project-card-title white">Akureyri</h2>
                  <h5 className="width-full photo-skill project-card-skill">ICELAND</h5>
                </div> 
                <div className="no-hover project-card-image">
                  <img src={img15} className="no-hover project-card-image" alt="img" />
                </div>
              </div>
            </div>
            <div className="project-card-container">
              <div className="project-card">
                <div class="width-full project-card-text">
                  <h2 className="width-full project-card-title white">Bangkok</h2>
                  <h5 className="width-full photo-skill project-card-skill">THAILAND</h5>
                </div> 
                <div className="no-hover project-card-image">
                  <img src={img20} className="no-hover project-card-image" alt="img" />
                </div>
              </div>
            </div>
            <div className="project-card-container">
              <div className="project-card">
                <div class="width-full project-card-text">
                  <h2 className="width-full project-card-title white">Gili Islands</h2>
                  <h5 className="width-full photo-skill project-card-skill">INDONESIA</h5>
                </div> 
                <div className="no-hover project-card-image">
                  <img src={img14} className="no-hover project-card-image" alt="img" />
                </div>
              </div>
            </div>
            <div className="project-card-container">
              <div className="project-card">
                <div class="width-full project-card-text">
                  <h2 className="width-full project-card-title white">Hoi An Old Town</h2>
                  <h5 className="width-full photo-skill project-card-skill">VIETNAM</h5>
                </div> 
                <div className="no-hover project-card-image">
                  <img src={img13} className="no-hover project-card-image" alt="img" />
                </div>
              </div>
            </div>
            <div className="project-card-container">
              <div className="project-card">
                <div class="width-full project-card-text">
                  <h2 className="width-full project-card-title white">Kenai Fjords</h2>
                  <h5 className="width-full photo-skill project-card-skill">ALASKA</h5>
                </div> 
                <div className="no-hover project-card-image">
                  <img src={img7} className="no-hover project-card-image" alt="img" />
                </div>
              </div>
            </div>
            <div className="project-card-container">
              <div className="project-card">
                <div class="width-full project-card-text">
                  <h2 className="width-full project-card-title white">Richmond</h2>
                  <h5 className="width-full photo-skill project-card-skill">VIRGINIA</h5>
                </div> 
                <div className="no-hover project-card-image">
                  <img src={img16} className="no-hover project-card-image" alt="img" />
                </div>
              </div>
            </div>
            <div className="project-card-container">
              <div className="project-card">
                <div class="width-full project-card-text">
                  <h2 className="width-full project-card-title white">Lao Chai Village</h2>
                  <h5 className="width-full photo-skill project-card-skill">VIETNAM</h5>
                </div> 
                <div className="no-hover project-card-image">
                  <img src={img9} className="no-hover project-card-image" alt="img" />
                </div>
              </div>
            </div>
            <div className="project-card-container">
              <div className="project-card">
                <div class="width-full project-card-text">
                  <h2 className="width-full project-card-title white">Reykjavik</h2>
                  <h5 className="width-full photo-skill project-card-skill">ICELAND</h5>
                </div> 
                <div className="no-hover project-card-image">
                  <img src={img5} className="no-hover project-card-image" alt="img" />
                </div>
              </div>
            </div>
          </ReactPageScroller>
        </div>
      </div>
    )
  }
}

export default PhotoScroller;
