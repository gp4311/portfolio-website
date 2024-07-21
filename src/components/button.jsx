import React from 'react';

const Button = ({ text, link, external }) => {
    return (
        <div className='relative inline-block'>
            <a
                href={link} target={external ? '_blank' : ''} rel={external ? 'noreferrer' : ''}
                className='text-lg text-text-color font-heading bg-background-color py-1 px-3 border-[2px] border-text-color
                         relative z-10 inline-block transform transition-transform duration-150 hover:translate-x-1 hover:translate-y-1'
            >
                {text}
            </a>
            <span className='absolute inset-0 bg-text-color transform translate-x-1 translate-y-1 z-0'></span>
        </div>

    )
}

export default Button;