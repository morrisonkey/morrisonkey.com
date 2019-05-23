import React, { Component } from "react";
import CvImage from './cv.jpg'
import './cv.scss'

export default class App extends Component {
  render() {
    return (
      <div className="cv-image">
        <img src={CvImage}/>
      </div>
    );
  }
}