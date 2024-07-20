import React from 'react';
import { footer } from '../data';

const Footer = () => {
    return (
        <div className='w-full h-[60px] flex items-center px-4 bg-background-color text-nav-text-color'>
            <p className='w-[500px] font-body text-xs'>
                {footer}
            </p>
        </div>
    )
}

export default Footer;