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
export const avatarPosition = <>Systems Design Engineering Student @ <span className='font-semibold text-color-1b'>UWaterloo</span></>;

// Footer
export const footer = <>Developed in <span className='italic'>Visual Studio Code</span>. Built with <span className='italic'>React</span> and <span className='italic'>Tailwind CSS</span>, and deployed via <span className='italic'>Vercel</span>. Text set in Calistoga and IBM Plex Sans fonts.</>;

// Resume
export const resumeUrl = 'https://drive.google.com/file/d/1qRwgmqOZ1dD-gltYLLn3ETuPwuyrIfsa/view?usp=sharing';

// Social
export const social = [
    {
        icon: <MdEmail size={30} />,
        to: 'mailto:gpahwa@uwaterloo.ca'
    },
    {
        icon: <FaLinkedin size={30} />,
        to: 'https://www.linkedin.com/in/gehnaa-pahwa/'
    },
    {
        icon: <FaGithub size={30} />,
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
        end: 'Aug 2024',
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
        description: 'I developed a critical algorithm for Edmonton\'s Valley Line Southeast LRT project. This algorithm calculates the aggregate stop time of a train to generate relief events in the case of a delayed trip.',
        start: 'Jan 2023',
        end: 'Apr 2023',
        technologies: ['Algorithm Development', 'C#', '.NET', 'SCADA']
    }
];

// Projects
export const projects = [
    {
        name: 'Wordle Bot',
        description: <>I built a <span className='italic'>Python</span> based automated solver for the popular <a href='https://www.nytimes.com/games/wordle/index.html' target='_blank' rel='noreferrer' className='italic text-color-2c hover:underline'>Wordle</a> game.</>,
        githubRepo: 'https://github.com/gp4311/wordle-bot',
        technologies: ['Python','Search Algorithms','Filtering Logic'],
        image: '/images/wordle-bot.jpg'
    },
    {
        name: 'Route Optimizer',
        description: <>I built a route optimizer with a <span className='italic'>React</span> frontend and an <span className='italic'>ASP.NET Core Web API</span> backend that quickly finds the shortest path for trips with multiple stops using the <a href='https://developers.google.com/maps/documentation/distance-matrix' target='_blank' rel='noreferrer' className='italic text-color-2c hover:underline'>Distance Matrix Google Maps API</a>.</>,
        githubRepo: 'https://github.com/gp4311/route-optimizer',
        technologies: ['ASP.NET Core', 'React', 'Javascript', 'CSS'],
        image: '/images/route-optimizer.jpg'
    },
    {
        name: 'Portfolio Website',
        description: <>I designed and developed this portfolio website using <span className='italic'>React</span> and <span className='italic'>Tailwind CSS</span>.</>,
        githubRepo: 'https://github.com/gp4311/portfolio-website',
        link: 'https://gehnaapahwa.vercel.app',
        technologies: ['React', 'Javascript', 'Tailwind CSS', 'UX/UI'],
        image: '/images/portfolio-website.png'
    },
    {
        name: 'Tetris',
        description: <>I recreated Tetris using <a href='https://processing.org/' target='_blank' rel='noreferrer' className='italic text-color-2c hover:underline'>Processing</a> and <span className='italic'>Java</span>.</>,
        githubRepo: 'https://github.com/gp4311/tetris',
        technologies: ['Processing', 'Java'],
        image: '/images/tetris.png'
    }
];

// About me
export const aboutIntroduction = <><span className='font-bold text-color-2d text-2xl'>Hi, I'm Gehnaa! &#128075; </span> <br></br>I love tackling complex problems and creating cool things—whether that's <span className='text-color-2d'>apps</span>, <span className='text-color-2d'>websites</span>, or <span className='text-color-2d'>systems.</span></>;
export const aboutSchool = <>I'm currently a <span className='font-bold text-color-2d'>Systems Design Engineering</span> student at the University of Waterloo. I chose this field because it gives me a chance to learn about all sorts of engineering disciplines, giving me a broad view of technology and innovation.</>;
export const aboutWork = <>I've had some awesome experiences working at <span className='font-bold text-color-2d'>Alstom</span> and <span className='font-bold text-color-2d'>Toyota Motors Manufacturing Canada</span> as a software development co-op. These experiences have been invaluable for building my skills and understanding, especially in the transportation industry. I'm really passionate about making transportation more eco-friendly and doing my part to help the planet.</>;
export const aboutFuture = <>Looking ahead, I want to earn my P.Eng designation and work with a company that's pushing the boundaries of sustainable and innovative technologies.</>;
export const aboutSkills = <>Here are some of the technologies I've worked with:</>;
export const aboutSkillsLanguages = <><span className='font-bold text-color-2d'>Languages:</span> Javascript, Python, C#, C++, Java, HTML/CSS</>;
export const aboutSkillsFrameworks = <><span className='font-bold text-color-2d'>Framworks & Libraries:</span> React, Redux, .NET</>;
export const aboutSkillsTools = <><span className='font-bold text-color-2d'>Tools & Databases:</span> Docker, Redis, SQL, Git, SVN, Visual Studio, Visual Studio Code, Azure DevOps</>;
export const aboutSkillsClosing = <>I'm always eager to learn more and keep up with the latest technologies.</>;
export const aboutFunFacts = <>When I’m not coding or studying, you’ll likely find me at the gym, powerlifting, or rock climbing &#x1f4aa;. I’m also a big bookworm and love discovering new reads.</>;

// Contact form
export const formspreeEndpoint = 'https://formspree.io/f/xnnanjvw';