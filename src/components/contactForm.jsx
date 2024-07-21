import React from 'react';
import { formspreeEndpoint } from '../data';

const ContactForm = () => {
    return (
        <form action={formspreeEndpoint} method='post' className='flex flex-col w-full max-w-xl gap-5 font-body'>
            <div>
                <label htmlFor='name' hidden>
                    Name
                </label>
                <input
                    className='w-full max-w-xl rounded-md p-2 text-main-text-color-1 border-2 border-color-1e outline-2 outline-main-text-color-1'
                    type='text'
                    name='name'
                    id='name'
                    placeholder='Name'
                    required
                />
            </div>
            <div>
                <label htmlFor='email' hidden>
                    Email
                </label>
                <input
                    className='w-full max-w-xl rounded-md p-2 text-main-text-color-1 border-2 border-color-1e outline-2 outline-main-text-color-1'
                    type='text'
                    name='email'
                    id='email'
                    placeholder='Email'
                    required
                />
            </div>
            <div>
                <label htmlFor='message' hidden>
                    Message
                </label>
                <textarea
                    className='w-full max-w-xl h-32 rounded-md p-2 text-main-text-color-1 border-2 border-color-1e outline-2 outline-main-text-color-1'
                    name='name'
                    id='message'
                    placeholder='Message'
                    required
                ></textarea>
            </div>
            <div className='relative inline-block w-fit self-center'>
                <input
                    className='w-[100px] text-lg text-main-text-color-1 font-heading bg-background-color py-1 px-3 border-[2px] border-main-text-color-1
                         relative z-10 inline-block transform transition-transform duration-150 hover:translate-x-1 hover:translate-y-1'
                    type='submit'
                    value='Submit'
                />
                <span className='w-[100px] absolute inset-0 bg-main-text-color-1 transform translate-x-1 translate-y-1 z-0'></span>
            </div>
        </form>
    )
}

export default ContactForm;