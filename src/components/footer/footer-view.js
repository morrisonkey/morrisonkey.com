import React from 'react';
import { Container, Content, Footer } from "react-bulma-components/full";
import dribbble from '../../assets/logos/dribbble-logo.svg';
import github from '../../assets/logos/github-logo.svg';
import instagram from '../../assets/logos/instagram-logo.svg';
import linkedin from '../../assets/logos/linkedin-logo.svg';
import medium from '../../assets/logos/medium-logo.svg';
import './footer-view.scss'

function FooterView() {
  return (
    <Footer>
      <a href="https://www.instagram.com/morrison_key" target="_blank">
        <img src={instagram} className="social-logo" alt="logo" />
      </a>
      <a href="https://dribbble.com/morrison_key" target="_blank">
        <img src={dribbble} className="social-logo" alt="logo" />
      </a>
      <a href="https://github.com/morrison-key" target="_blank">
        <img src={github} className="social-logo" alt="logo" />
      </a>
      <a href="https://www.linkedin.com/in/morrison-key/" target="_blank">
        <img src={linkedin} className="social-logo" alt="logo" />
      </a>
      <a href="https://medium.com/@morrison_key" target="_blank">
        <img src={medium} className="social-logo" alt="logo" />
      </a>
      <Container className="copywrite-container">
        <Content className="copywrite-content">
          &copy;2019 Morrison Key
        </Content>
      </Container>
    </Footer>
  );
}

export default FooterView;
