import React from 'react';
import { FiGithub } from "react-icons/fi";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";

const Projects = ({ projects }) => {
    return (
        <div className='font-body text-text-color gap-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
            {
                projects ? projects.map((project, key) => (
                    <div key={key} className='group bg-background-color border-text-color border-[2px] rounded-lg p-5'>
                        <img src={project.image} alt='' className='object-contain object-top w-full h-[200px] rounded-lg mb-5 grayscale group-hover:grayscale-0 transition duration-500'></img>

                        <div className='flex justify-between'>
                            <h1 className='text-xl font-bold text-center'>{project.name}</h1>

                            <div className='flex gap-5 justify-end items-center'>
                                {
                                    project.link ? <a href={project.link} target='_blank' rel='noreferrer'>
                                        <FaArrowUpRightFromSquare size={20} className='hover:text-color-2a transition duration-500' />
                                    </a>
                                        : null}
                                <a href={project.githubRepo} target='_blank' rel='noreferrer'>
                                    <FiGithub size={25} className='hover:text-color-2a transition duration-500' />
                                </a>
                            </div>
                        </div>

                        <p>{project.description}</p>
                    </div>
                ))
                    : null
            }
        </div>
    )
}

export default Projects;