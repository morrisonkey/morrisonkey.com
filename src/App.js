import React from 'react'
import { Switch, Route } from 'react-router-dom';
import './App.scss'
import About from './components/about'
import Cv from './components/cv'
import PhotoScroller from './components/photo'
import NotFound from './components/404'
import Home from './components/home'
import Menu from './components/menu'
import Project from './components/project'
import ProjectList from './components/projects/list'
import FullLayout from './layouts/FullLayout';
import BlackLayout from './layouts/BlackLayout';
import HalfLayout from './layouts/HalfLayout';

class App extends React.Component {
  render () {
    console.log(this.props);
    return (
      <Switch>
        <FullLayout exact path='/' component={Home} />
        <FullLayout exact path='/about' component={About} />
        <BlackLayout exact path='/cv' component={Cv} />
        <FullLayout exact path='/selected-works' component={ProjectList} />
        <HalfLayout exact path='/menu' component={Menu} />
        <FullLayout path='/selected-work/:id' component={Project}/>
        <BlackLayout path='/photos' component={PhotoScroller} />
        <Route exact path='/teamweek' component={() => { window.location = 'https://projects.invisionapp.com/prototype/teamweek-mobile-cjuy1ccny0093gw015u6u6a8c'; return null;} }/>
        <Route exact path='/briefly' component={() => { window.location = 'https://invis.io/P3RUPQ29V6J'; return null;} }/>
        <Route exact path='/soundcloud' component={() => { window.location = 'https://invis.io/SBRHYFEFC7M'; return null;} }/>
        <Route exact path='/reincarnage' component={() => { window.location = 'http://reincarnage.herokuapp.com'; return null;} }/>
        <Route exact path='/leadfeeder' component={() => { window.location = 'https://leadfeeder.com'; return null;} }/>
        <Route exact path='/nsrinvest' component={() => { window.location = 'https://nsrinvest.com'; return null;} }/>
        <FullLayout component={NotFound}/>
      </Switch>
    );
  }
}

export default App;
