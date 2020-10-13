import React from "react"
import Thumbnail from './Thumbnail.js'
import './App.css';
import coffee from './assets/coffee.jpg'
 
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
    </div>
  )
}
 
export default Projects;