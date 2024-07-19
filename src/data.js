// Icons
import {
    FiMail,
    FiGithub
} from "react-icons/fi";
import { TfiLinkedin } from "react-icons/tfi";

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
export const footer = <>Developed in <span className='italic'>Visual Studio Code</span>. Built with <span className='italic'>React</span> and <span className='italic'>Tailwind CSS</span>, and deployed via <span className='italic'>Vercel</span>. Text set in Amaranth and Roboto fonts.</>;

// Social
export const social = [
    {
        icon: <FiMail />,
        to: 'mailto:gpahwa@uwaterloo.ca'
    },
    {
        icon: <TfiLinkedin />,
        to: 'https://www.linkedin.com/in/gehnaa-pahwa/'
    },
    {
        icon: <FiGithub />,
        to: 'https://github.com/gp4311'
    }
];

// Experience
export const experience = [
    {
        position: 'Information Systems Co-op Analyst',
        company: 'Toyota Motors Manufacturing Canada',
        description: 'I contributed to the development of a software system for monitoring and analyzing real-time data from robotic systems. I redesigned the backend of the application, migrating it from SQLite to Redis to enhance performance and scalability, and containerized the backend for deployment.',
        start: 'May 2024',
        end: 'Present',
        technologies: ['.NET', 'React', 'Docker', 'Redis', 'SQL', 'Javascript']
    },
    {
        position: 'Software Developer Intern',
        company: 'Alstom',
        description: 'I primarily created the frontend of the web-based Train Management System (TMS) for São Paulo Metro\'s Monorail System. I also contributed to backend development, gaining valuable experience in both frontend and backend technologies.',
        start: 'Sep 2023',
        end: 'Dec 2023',
        technologies: ['React', 'Redux', 'Javascript', 'HTML', 'CSS', '.NET']
    },
    {
        position: 'Software Developer Intern',
        company: 'Alstom',
        description: 'Developed a critical algorithm for Edmonton\'s Valley Line Southeast LRT project.',
        start: 'Jan 2023',
        end: 'Apr 2023',
        technologies: ['C#', '.NET', 'SCADA', 'CLI']
    },
    {
        position: 'Software Development Intern',
        company: 'TaxTron Inc.',
        description: 'Led the successful redesign of the company\'s website to enhance user experience and drive engagement.',
        start: 'Jul 2021',
        end: 'Aug 2021',
        technologies: ['Node.js', 'Javascript', 'HTML', 'CSS']
    },
];