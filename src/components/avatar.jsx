import React from 'react';
import { avatarHeader, avatarDescription, avatarPosition } from '../data';
import { ReactComponent as AvatarSvg } from '../assets/avatar.svg';

const Avatar = () => {
    return (
        <div className='flex flex-col justify-center items-center md:flex-row-reverse md:gap-20'>
            <div className='lg:w-[512px] lg:h-[512px]'>
                <AvatarSvg />
            </div>
            <div className='max-w-[500px] flex flex-col gap-2'>
                <div className='text-4xl text-center font-heading py-4 text-text-color md:text-6xl md:text-left'>
                    {avatarHeader}
                </div>
                <p className='text-xl font-body'>
                    {avatarDescription}
                </p>
                <p className='text-xl font-body'>
                    {avatarPosition}
                </p>
            </div>
        </div>
    )
}

export default Avatar;