import React from 'react';
import ProjectItem from './ProjectItem'; 
import ProjectList from './ProjectList'

const ProjectList = ({ projects }) => {
  return (
    <ul>
      {projects.map((project) => (
        <ProjectItem key={project.id} technologies={project.technologies} />),
        
      )}
    </ul>
  );
};


export default ProjectList;