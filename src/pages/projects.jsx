import React from 'react';
import ProjectsTable from '../components/projectsTable'
import { projects } from '../data';

const Projects = () => {
    return (
        <div className='p-10'>
            <div className='py-10 text-main-text-color-1 text-center font-heading text-3xl'>
                Here are some of the projects I've worked on!
            </div>

            <div className='w-full flex flex-col gap-5 items-center'>
                <ProjectsTable projects={projects}/>
            </div>
        </div>
    )
}

export default Projects;