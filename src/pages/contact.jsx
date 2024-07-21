import React from 'react';
import ContactForm from '../components/contactForm';
import { social } from '../data'

const Contact = () => {
    return (
        <div className='p-10'>
            <section id='form' className='flex flex-col justify-center items-center pb-10 gap-10'>
                <div className='pt-10 text-main-text-color-1 text-center'>
                    <h1 className='font-heading text-3xl'>Let's stay connected!</h1>
                    <p className='font-body'>I'd love to hear from you and explore opportunities together.</p>
                </div>
                <ContactForm />
            </section>

            <section id='other-methods' className='pb-10'>
                <div className='text-main-text-color-1 text-center pb-5'>
                    <p className='font-body'>or feel free to reach out using one of the methods below:</p>
                </div>
                <div className='flex gap-5 justify-center'>
                    {
                        social.map((s, key) => (
                            <a key={key} href={s.to} target='_blank' rel='noreferrer' className='text-main-text-color-1 hover:text-color-2d transition duration-500'>
                                {s.icon}
                            </a>
                        ))
                    }
                </div>
            </section>
        </div>
    )
}

export default Contact;