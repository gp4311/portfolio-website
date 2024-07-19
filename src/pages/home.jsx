import React from 'react';
import Avatar from '../components/avatar'

const Home = () => {
    return (
        <div>
            <section id='introduction' className='w-full h-[calc(100vh-80px)] bg-nav-background-color p-10 flex flex-col justify-center items-center gap-20'>
                <Avatar />
            </section>
            <section id='experience' className='w-full bg-color-1c p-10 flex flex-col gap-20'>
                <div className='text-5xl font-heading font-semibold py-4 text-main-text-color-1'>
                    Experience
                </div>
            </section>
            <section id='projects' className='w-full bg-color-2a p-10 flex flex-col gap-20'>
                <div className='text-5xl font-heading font-semibold py-4 text-main-text-color-1'>
                    Projects
                </div>
            </section>
        </div>
    )
}

export default Home;