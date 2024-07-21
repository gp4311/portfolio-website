// Icons
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

// Navigation
export const navigation = [
    {
        label: 'home',
        to: '/',
    },
    {
        label: 'about',
        to: '/about',
    },
    {
        label: 'projects',
        to: '/projects',
    },
    {
        label: 'contact',
        to: '/contact',
    }
]

// Avatar
export const avatarHeader = 'Hi, I\'m Gehnaa!';
export const avatarDescription = 'I\'m passionate about coding and creating things that make a positive impact.';
export const avatarPosition = <>Systems Design Engineering Student @ <span className='font-semibold text-color-3c'>UWaterloo</span></>;

// Footer
export const footer = <>Developed in <span className='italic'>Visual Studio Code</span>. Built with <span className='italic'>React</span> and <span className='italic'>Tailwind CSS</span>, and deployed via <span className='italic'>Vercel</span>. Text set in Calistoga and IBM Plex Sans fonts.</>;

// Resume
export const resumeUrl = 'https://drive.google.com/file/d/1W9Jszl7nj3eG4foTrvmvIOJXuV16toEA/view?usp=sharing';

// Social
export const social = [
    {
        icon: <MdEmail size={30}/>,
        to: 'mailto:gpahwa@uwaterloo.ca'
    },
    {
        icon: <FaLinkedin size={30}/>,
        to: 'https://www.linkedin.com/in/gehnaa-pahwa/'
    },
    {
        icon: <FaGithub size={30}/>,
        to: 'https://github.com/gp4311'
    }
];

// Experience
export const experiences = [
    {
        position: 'Information Systems Co-op Analyst',
        company: 'Toyota Motors Manufacturing Canada',
        link: 'https://tmmc.ca/en/',
        description: 'I contributed to the development of a software system for monitoring and analyzing real-time data from robotic systems. I redesigned the backend of the application, migrating it from SQLite to Redis to enhance performance and scalability, and containerized the backend for deployment.',
        start: 'May 2024',
        end: 'Present',
        technologies: ['.NET', 'React', 'Docker', 'Redis', 'SQL', 'Javascript']
    },
    {
        position: 'Software Developer Intern',
        company: 'Alstom',
        link: 'https://www.alstom.com/alstom-brazil',
        description: 'I primarily created the frontend of the web-based Train Management System (TMS) for São Paulo Metro\'s Monorail System. I also contributed to backend development, gaining valuable experience in both frontend and backend technologies.',
        start: 'Sep 2023',
        end: 'Dec 2023',
        technologies: ['React', 'Redux', 'Javascript', 'HTML', 'CSS', '.NET']
    },
    {
        position: 'Software Developer Intern',
        company: 'Alstom',
        link: 'https://www.alstom.com/press-releases-news/2023/11/alstom-and-partners-celebrate-launch-edmonton-valley-line-southeast-lrt',
        description: 'Developed a critical algorithm for Edmonton\'s Valley Line Southeast LRT project.',
        start: 'Jan 2023',
        end: 'Apr 2023',
        technologies: ['Algorithm Development', 'C#', '.NET', 'SCADA']
    }
];

// Projects
export const projects = [
    {
        name: 'Portfolio Website',
        description: <>I designed and developed this portfolio website using <span className='italic'>React</span> and <span className='italic'>Tailwind CSS</span>.</>,
        githubRepo: 'https://github.com/gp4311/portfolio-website',
        image: '/images/portfolio-website.png'
    },
    {
        name: 'Tetris',
        description: <>I recreated Tetris using <a href='https://processing.org/' target='_blank' rel='noreferrer' className='italic text-color-2c hover:underline'>Processing</a> and <span className='italic'>Java</span>.</>,
        githubRepo: 'https://github.com/gp4311/tetris',
        image: '/images/tetris.png'
    }
];

// Contact form
export const formspreeEndpoint = 'https://formspree.io/f/xnnanjvw';