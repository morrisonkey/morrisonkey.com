import React from 'react';
import FooterView from './footer'
import Navbar from './navbar'
import { Route, Redirect } from 'react-router-dom'
import { Hero } from 'react-bulma-components/full'
 
const HalfLayout = ({ component: Component, ...rest }) => {
  return (
    <Route {...rest} render={matchProps => (
      <Hero size="fullheight" className="App">
        <Hero.Head renderAs="header">
          <Navbar />
        </Hero.Head>
  
        <Hero.Body className="main-content">
          <Component {...matchProps}/>
        </Hero.Body>
      </Hero>
    )} />
  )
};
 
export default HalfLayout;