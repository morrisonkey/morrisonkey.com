import React from 'react'
import './App.scss'
import HeaderView from './components/header'
import FooterView from './components/footer'
import ProjectList from './components/projects/list'
import { Hero } from "react-bulma-components/full";


const App = () => {
  return (
    <Hero size="fullheight" className="App">
      <Hero.Head renderAs="header">
        <HeaderView />
      </Hero.Head>

      <Hero.Body>
        <ProjectList />
      </Hero.Body>

      <Hero.Footer>
          <FooterView/>
      </Hero.Footer>
    </Hero>
  );
}

export default App;
