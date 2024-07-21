import React from 'react';
import Avatar from '../components/avatar';
import Experience from '../components/experience';
import Projects from '../components/projects'
import Button from '../components/button';
import { resumeUrl } from '../data';
import { projects } from '../data';

const Home = () => {
    return (
        <div>
            <section id='introduction' className='w-full h-[calc(100vh-80px)] p-10 flex flex-col justify-center items-center gap-20'>
                <Avatar />
            </section>

            <section id='experience' className='w-full p-10 flex flex-col gap-5'>
                <div className='w-fit'>
                    <h1 className='text-5xl font-heading py-4 text-text-color'>Experience</h1>
                    <hr className='w-2/5 text-color-3b border-2'></hr>
                </div>
                <Experience />
                <div className='pt-5 text-center'>
                    <Button text='view my résumé' link={resumeUrl} external={true} />
                </div>
            </section>
            
            <section id='projects' className='w-full p-10 flex flex-col gap-5'>
            <div className='w-fit'>
                    <h1 className='text-5xl font-heading py-4 text-text-color'>Projects</h1>
                    <hr className='w-2/5 text-color-2b border-2'></hr>
                </div>
                <Projects projects={projects.length < 6 ? projects : projects.slice(0, 6)}/>
                <div className='pt-5 text-center'>
                    <Button text='view all projects' link='/projects' external={false} />
                </div>
            </section>
        </div>
    )
}

export default Home;