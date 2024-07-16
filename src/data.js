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
]