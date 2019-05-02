import React from 'react';
import Navbar from './navbar'
import { Route, Redirect } from 'react-router-dom'
import TransitionGroup from 'react-transition-group/TransitionGroup';
import { Hero } from 'react-bulma-components/full'

const firstChild = props => {
  const childrenArray = React.Children.toArray(props.children);
  return childrenArray[0] || null;
};
 
const HalfLayout = ({ component: Component, ...rest }) => {
  return (
    <Route children={({ match, ...rest }) => (
      <TransitionGroup component={firstChild}>
        {match &&
          <Hero size="fullheight" className="App">
            <Hero.Head renderAs="header">
              <Navbar />
            </Hero.Head>
      
            <Hero.Body className="main-content">
              <Component {...match}/>
            </Hero.Body>
          </Hero>
        }
    </TransitionGroup>
    )} />
  )
};
 
export default HalfLayout;