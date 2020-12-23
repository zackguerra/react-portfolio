import React from 'react'
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';

export const SidebarData = [
    {
        title: 'Home',
        path: '/',
        icon: <AiIcons.AiFillHome />,
        cName: 'nav-text'
    },
    {
        title: 'About',
        path: '/about',
        icon: <FaIcons.FaUser />,
        cName: 'nav-text'
    },
    {
        title: 'Services',
        path: '/services',
        icon: <FaIcons.FaBriefcase />,
        cName: 'nav-text'
    },
    {
        title: 'Experience',
        path: '/experience',
        icon: <FaIcons.FaUniversity />,
        cName: 'nav-text'
    },
    {
        title: 'Works',
        path: '/works',
        icon: <FaIcons.FaKeyboard />,
        cName: 'nav-text'
    },
    {
        title: 'Contact-me',
        // path: '/contact',
        path: 'mailto:ezequiasguerra@yahoo.com.br',
        icon: <FaIcons.FaComments />,
        cName: 'nav-text'
    },
]