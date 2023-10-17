import React from 'react';
import ProjectCard from '../project card/projectCard';
import './project_container.css'

export default function Project_container() {
  return (
    <div className='project_container'>
      <div className='project_container-main'>
        <h1 className='project_container-main-title'>Projects</h1>
        <div className='project_container-sub'>
        <ProjectCard/>
        <ProjectCard/>
        <ProjectCard/>
        </div>
      </div>
      
       
        
    </div>
  )
}
