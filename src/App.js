import React from 'react'
import { Switch, Route } from 'react-router-dom';
import './App.scss'
import About from './components/about'
import FourOhFour from './components/four-oh-four'
import Home from './components/home'
import Menu from './components/menu'
import Project from './components/project'
import ProjectList from './components/projects/list'
import FullLayout from './layouts/FullLayout';
import HalfLayout from './layouts/HalfLayout';

class App extends React.Component {
  render () {
    console.log(this.props);
    return (
      <Switch>
        <FullLayout exact path='/' component={Home} />
        <FullLayout exact path='/selected-works' component={ProjectList} />
        <HalfLayout exact path='/menu' component={Menu} />
        <FullLayout exact path='/about' component={About} />
        <FullLayout path='/selected-work/:id' component={Project}/>
        <Route component={FourOhFour}/>
      </Switch>
    );
  }
}

export default App;
