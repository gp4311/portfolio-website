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
            <section id='introduction' className='w-full h-[calc(100vh-80px)] bg-background-color p-10 flex flex-col justify-center items-center gap-20'>
                <Avatar />
            </section>

            <section id='experience' className='w-full bg-color-1c p-10 flex flex-col gap-5'>
                <div className='text-5xl font-heading py-4 text-main-text-color-1'>Experience</div>
                <Experience />
                <div className='pt-5 text-center'>
                    <Button text='view my résumé' link={resumeUrl} external={true} />
                </div>
            </section>
            
            <section id='projects' className='w-full bg-color-2a p-10 flex flex-col gap-5'>
                <div className='text-5xl font-heading py-4 text-main-text-color-1'>Projects</div>
                <Projects projects={projects.length < 6 ? projects : projects.slice(0, 6)}/>
                <div className='pt-5 text-center'>
                    <Button text='view all projects' link='/projects' external={false} />
                </div>
            </section>
        </div>
    )
}

export default Home;