import React from 'react'
import { Switch, Route } from 'react-router-dom';
import './App.scss'
import About from './components/about'
import Cv from './components/cv'
import PhotoScroller from './components/photo'
import NotFound from './components/404'
import Menu from './components/menu'
import Project from './components/project'
import ProjectList from './components/projects/list'
import FullLayout from './layouts/FullLayout';
import BlackLayout from './layouts/BlackLayout';
import HalfLayout from './layouts/HalfLayout';

class App extends React.Component {
  render () {
    return (
      <Switch>
        <FullLayout exact path='/about' component={About} />
        <BlackLayout exact path='/cv' component={Cv} />
        <FullLayout exact path='/' component={ProjectList} />
        <HalfLayout exact path='/menu' component={Menu} />
        <FullLayout path='/selected-work/:id' component={Project}/>
        <BlackLayout path='/photos' component={PhotoScroller} />
        <Route exact path='/teamweek' component={() => { window.location = 'https://medium.com/@morrison_key/enhancing-my-design-tool-stack-creating-an-animated-prototype-with-invision-studio-2e6b6e30ff02?source=friends_link&sk=4fed537c2b3280f62a15328f1a443601'; return null;} }/>
        <Route exact path='/briefly' component={() => { window.location = 'https://medium.com/@morrison_key/briefly-get-briefed-on-the-fly-754c92ac1e9?source=friends_link&sk=092cf7a01d61f1b2cdbb6803ee4d7316'; return null;} }/>
        <Route exact path='/filterbuds' component={() => { window.location = 'https://medium.com/@morrison_key/diving-deeper-into-ux-ui-my-first-client-project-fe0aee31b1fc?source=friends_link&sk=fb590cbf36412b1c7c1348a844c09602'; return null;} }/>
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
