import React from 'react';
import { Container, Content, Footer } from "react-bulma-components/full";
import dribbble from '../../assets/logos/dribbble-logo.svg';
import github from '../../assets/logos/github-logo.svg';
import instagram from '../../assets/logos/instagram-logo.svg';
import linkedin from '../../assets/logos/linkedin-logo.svg';
import medium from '../../assets/logos/medium-logo.svg';
import './footer-view.scss'

function FooterView(props) {
  return (
    <Footer>
      <div className="copywrite">
        <p className="copywrite-text">&copy;2019 MorrisonKey, Made in React</p>
      </div>
      <a href="https://www.instagram.com/morrison_key" target="_blank" className="social-logo">
        <img src={instagram} alt="logo" />
      </a>
      <a href="https://dribbble.com/morrison_key" target="_blank" className="social-logo">
        <img src={dribbble} alt="logo" />
      </a>
      <a href="https://github.com/morrison-key" target="_blank" className="social-logo">
        <img src={github} alt="logo" />
      </a>
      <a href="https://www.linkedin.com/in/morrison-key/" target="_blank" className="social-logo">
        <img src={linkedin} alt="logo" />
      </a>
      <a href="https://medium.com/@morrison_key" target="_blank" className="social-logo">
        <img src={medium} alt="logo" />
      </a>
    </Footer>
  );
}

export default FooterView;
