import React from "react";

const ProjectItem = ({ id, technologies }) => {
  return (
    <div>
      <h3>Project {id}</h3>
      <p>Technologies used:</p>
      {technologies.map((tech, index) => (
        <span key={index}>{tech}</span>
      ))}
    </div>
  );
};


export default ProjectItem;


