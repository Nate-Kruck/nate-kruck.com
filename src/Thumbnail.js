/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
import './App.css';

function Thumbnail(props) {
  return (
    <div className="project">
      <a href={props.link} target="blank">
        <div className="project-image">
          <img src={props.image} alt="Project Image" />
        </div>
      </a>
        <div className="project-title">{props.title}</div>
        <div className="project-category">{props.category}</div>
    </div>
  )
}

export default Thumbnail;