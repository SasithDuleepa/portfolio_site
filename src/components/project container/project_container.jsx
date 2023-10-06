import React from 'react';
import ProjectCard from '../project card/projectCard';
import './project_container.css'

export default function Project_container() {
  return (
    <div className='project_container'>
        <ProjectCard/>
        <ProjectCard/>
        <ProjectCard/>
        
    </div>
  )
}
