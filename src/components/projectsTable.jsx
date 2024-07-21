import React from 'react';
import { GoArrowUpRight } from "react-icons/go";
import { FiGithub } from "react-icons/fi";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";

const ProjectsTable = ({ projects }) => {

    function shortenUrl(url) {
        const urlObject = new URL(url);

        let hostname = urlObject.hostname.replace(/^www\./, '');
        let pathname = urlObject.pathname;
        let query = urlObject.search;
        let hash = urlObject.hash;

        return `${hostname}${pathname}${query}${hash}`;
    }

    const LinkArrow = () => {
        return (
            <div className='inline-block translate-y-1 transform transition-transform duration-150 group-hover:translate-x-1 group-hover:-translate-y-0.5'>
                <GoArrowUpRight />
            </div>
        )
    }

    return (
        <div className='w-full'>
            <table className='text-text-color font-body w-full'>
                <thead>
                    <tr className='font-bold text-left text-sm border-b-2 border-color-3c'>
                        <th className='hidden sm:table-cell px-3 py-5'>Name</th>
                        <th className='hidden lg:table-cell px-3 py-5'>Built with</th>
                        <th className='hidden sm:table-cell min-w-40 px-3 py-5'>Link</th>
                        <th className='hidden sm:table-cell min-w-40 px-3 py-5'>Github Repo</th>
                    </tr>
                </thead>

                <tbody>
                    {
                        projects.map((project, key) => (
                            <tr key={key} className='border-b-2 border-color-3b'>
                                <td className='flex justify-between gap-5 p-3 font-bold text-lg'>
                                    {project.name}
                                    <div className='flex gap-5 justify-end items-center sm:hidden'>
                                        {
                                            project.link ?
                                                <a href={project.link} target='_blank' rel='noreferrer'>
                                                    <FaArrowUpRightFromSquare size={20} className='hover:text-color-2a transition duration-500' />
                                                </a>
                                                : null
                                        }
                                        <a href={project.githubRepo} target='_blank' rel='noreferrer'>
                                            <FiGithub size={25} className='hover:text-color-2a transition duration-500' />
                                        </a>
                                    </div>
                                </td>
                                <td className='hidden lg:table-cell p-3'>
                                    <div className='flex flex-wrap gap-2'>
                                        {
                                            project.technologies.map((technology, i) => (
                                                <div key={i} className='py-1 px-3 rounded-3xl bg-color-3b text-color-3e'>
                                                    {technology}
                                                </div>
                                            ))
                                        }
                                    </div>

                                </td>
                                <td className='hidden sm:table-cell p-3 text-sm'>
                                    {
                                        project.link ?
                                            <a href={project.link} target='_blank' rel='noreferrer'>
                                                <span className='group hover:text-color-3b transition duration-500'>
                                                    {shortenUrl(project.link)}
                                                    <LinkArrow />
                                                </span>
                                            </a>
                                            : ''
                                    }
                                </td>
                                <td className='hidden sm:table-cell p-3 text-sm'>
                                    <a href={project.githubRepo} target='_blank' rel='noreferrer'>
                                        <span className='group hover:text-color-3b transition duration-500'>
                                            {shortenUrl(project.githubRepo)}
                                            <LinkArrow />
                                        </span>
                                    </a>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    );
}

export default ProjectsTable;