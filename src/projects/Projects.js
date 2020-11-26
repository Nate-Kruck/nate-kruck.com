import React from "react";
import Thumbnail from './Thumbnail.js';
import './App.css';
import coffee from '../assets/coffee.jpg';
import networkr from '../assets/networkr.png';
import mood from '../assets/mood.png';
 
function Projects(props) {
  return (
    <div>
      <h1>Projects</h1>
      <Thumbnail
        link="https://kind-bhabha-f2de49.netlify.app/"
        image={coffee}
        title="No Stars, No Bucks"
        category=""
      />
      <Thumbnail
        link="https://networkr-be.herokuapp.com/"
        image={networkr}
        title="Content Hub for Alchemy Students"
        category=""
      />
      <Thumbnail
        link="https://mood-music.netlify.app/"
        image={mood}
        title="Mood Music"
        category=""
      />
    </div>
  )
}
 
export default Projects;