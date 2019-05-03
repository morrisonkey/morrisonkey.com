import React from 'react'
import { Switch, Route } from 'react-router-dom';
import './App.scss'
import Photo from './components/photo'
import NotFound from './components/404'
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
        <FullLayout path='/selected-work/:id' component={Project}/>
        <HalfLayout path='/photograph/:id' component={Photo} />
        <FullLayout component={NotFound}/>
      </Switch>
    );
  }
}

export default App;
