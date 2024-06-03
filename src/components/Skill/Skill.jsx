import React, { useState, useRef, useEffect, useLayoutEffect } from 'react';

import { motion } from 'framer-motion';

import './Skill.scss';
import { getImageUrl } from '../../help/utils';

const container = (delay) => ({
    hidden: {
        x: 0,
        opacity: 0,
    },
    whileInView: {
        x: 0,
        opacity: 1,
        transition: {
            delay: delay,
            duration: 0.5,
        },
    },
});

const Skill = () => {
    const galleryRef = useRef(null);

    const [columnData, setColumnData] = useState({});

    const listSkill = [
        {
            name: 'HTML5',
            icon: 'html5-original.svg',
            src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg',
        },
        {
            name: 'CSS3',
            icon: 'css3-original.svg',
            src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg',
        },
        {
            name: 'Sass',
            icon: 'sass-original.svg',
            src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sass/sass-original.svg',
        },
        {
            name: 'JavaScript',
            icon: 'javascript-original.svg',
            src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg',
        },
        {
            name: 'TypeScript',
            icon: 'typescript-original.svg',
            src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg',
        },
        {
            name: 'React',
            icon: 'react-original.svg',
            src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg',
        },
        {
            name: 'NodeJS',
            icon: 'nodejs-original-wordmark.svg',
            src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg',
        },
        {
            name: 'Redux',
            icon: 'redux-original.svg',
            src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redux/redux-original.svg',
        },
        {
            name: 'MongoDB',
            icon: 'mongodb-original.svg',
            src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg',
        },
        {
            name: 'MySQL',
            icon: 'mysql-original-wordmark.svg',
            src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original-wordmark.svg',
        },
        {
            name: 'TailwindCSS',
            icon: 'tailwindcss-original.svg',
            src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg',
        },
        {
            name: 'Ant Design',
            icon: 'antdesign-original.svg',
            src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/antdesign/antdesign-original.svg',
        },
        {
            name: 'MaterialUI',
            icon: 'materialui-original.svg',
            src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/materialui/materialui-original.svg',
        },
        {
            name: 'Bootstrap',
            icon: 'bootstrap-original.svg',
            src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg',
        },
        {
            name: 'Github',
            icon: 'github-original.svg',
            src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg',
        },
        {
            name: 'Git',
            icon: 'git-original.svg',
            src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg',
        },
        {
            name: 'Figma',
            icon: 'figma-original.svg',
            src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg',
        },
    ];

    const handleResize = () => {
        const galleryElm = galleryRef.current;
        if (galleryElm) {
            const gridComputedStyle = window.getComputedStyle(galleryElm);
            const gridColumnCount = gridComputedStyle.getPropertyValue('grid-template-columns').split(' ').length;
            const firstRow = (gridColumnCount - (gridColumnCount % 2)) / 2;
            const twoRows = gridColumnCount % 2 === 1 ? firstRow * 2 : firstRow * 2 - 1;
            setColumnData({
                firstRow: firstRow,
                twoRows: twoRows,
            });
        }
    };

    const isMovedLeft = (order) => {
        if (columnData.firstRow === undefined) return null;
        else {
            const { firstRow, twoRows } = columnData;
            return (order - firstRow) % twoRows === 1;
        }
    };

    useLayoutEffect(() => {
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div id="skill" className="skill-container">
            <div className="title">
                <h1>Skills</h1>
            </div>
            <div className="gear">
                <img src={getImageUrl('skills/gear2.svg')} alt="" />
            </div>
            <div className="gear2">
                <img src={getImageUrl('skills/gear2.svg')} alt="" />
            </div>
            <>
                <div className="gallery honeycomb" ref={galleryRef}>
                    {listSkill.map((skill, index) => (
                        <div className={`item ${isMovedLeft(index + 1) ? 'moveleft' : ''}`} key={index}>
                            <motion.img
                                variants={container(index * 0.2)}
                                initial="hidden"
                                whileInView="whileInView"
                                src={skill.src}
                                title={skill.name}
                            />
                        </div>
                    ))}
                </div>
            </>
        </div>
    );
};

export default Skill;
