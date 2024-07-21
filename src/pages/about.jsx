import React from 'react';
import {
    aboutIntroduction, aboutSchool, aboutWork, aboutFuture,
    aboutSkills, aboutSkillsLanguages, aboutSkillsFrameworks, aboutSkillsTools, aboutSkillsClosing,
    aboutFunFacts
} from '../data';
import { ReactComponent as Skills } from '../assets/about-skills.svg';
import { ReactComponent as Background } from '../assets/about-background.svg';

const About = () => {
    return (
        <div className='p-10 text-text-color'>
            <h1 className='text-center md:text-left font-heading text-5xl pt-10 pb-16'>A little bit about me.</h1>

            <section id='introduction'>
                <div className='font-body text-xl'>
                    {aboutIntroduction}
                </div>
            </section>

            <section id='experience' className='pt-16 flex flex-col md:flex-row md:items-center md:justify-between md:gap-20'>
                <div className='w-full md:w-1/3'>
                    <Background />
                </div>

                <div className='w-full md:w-2/3 font-body text-lg flex flex-col gap-3'>
                    <h1 className='font-heading text-3xl pb-5'>Background</h1>
                    <div>
                        {aboutSchool}
                    </div>
                    <div>
                        {aboutWork}
                    </div>
                    <div>
                        {aboutFuture}
                    </div>
                </div>
            </section>

            <section id='skills' className='pt-16 flex flex-col md:flex-row-reverse md:items-center md:justify-between md:gap-20'>
                <div className='w-full md:w-1/3'>
                    <Skills />
                </div>

                <div className='w-full md:w-2/3 font-body text-lg flex flex-col gap-3'>
                    <h1 className='font-heading text-3xl pb-5'>Skills</h1>
                    <div>
                        {aboutSkills}
                    </div>
                    <ul className='list-disc pl-8'>
                        <li>{aboutSkillsLanguages}</li>
                        <li>{aboutSkillsFrameworks}</li>
                        <li>{aboutSkillsTools}</li>
                    </ul>
                    <div>
                        {aboutSkillsClosing}
                    </div>
                </div>
            </section>

            <section id='fun-facts' className='pt-16 font-body text-lg'>
                {aboutFunFacts}
            </section>
        </div>
    )
}

export default About;