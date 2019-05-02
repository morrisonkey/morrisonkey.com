import React from 'react'
import { Switch, Route } from 'react-router-dom';
import './App.scss'
import About from './components/about'
import Home from './components/home'
import FooterView from './components/footer'
import Menu from './components/menu'
import Navbar from './components/navbar'
import Project from './components/project'
import ProjectList from './components/projects/list'
import { Hero } from "react-bulma-components/full";


class App extends React.Component {
  render () {
    return (
      <Hero size="fullheight" className="App">
        <Hero.Head renderAs="header">
          <Navbar />
        </Hero.Head>
  
        <Hero.Body className="main-content">
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/selected-works' component={ProjectList} />
            <Route exact path='/menu' component={Menu} />
            <Route exact path='/about' component={About} />
            <Route path='/selected-work/:id' component={Project}/>
          </Switch>
        </Hero.Body>
  
        <Hero.Footer>
            <FooterView/>
        </Hero.Footer>
      </Hero>
    );
  }
}

export default App;
