import React from 'react';
import './Experience.scss';
import {
    Timeline,
    TimelineItem,
    TimelineSeparator,
    TimelineConnector,
    TimelineContent,
    TimelineOppositeContent,
} from '@mui/lab';
import { Paper, Typography, Box, Avatar } from '@mui/material';
import { Tag } from 'antd';
import { styled } from '@mui/system';
import { getImageUrl } from '../../help/utils';
import { motion } from 'framer-motion';

const workExperiences = [
    {
        role: 'Frontend Web Developer - Intern',
        company: 'IVS Joint Stock Company - (Individual System)',
        date: 'July 2023 - Oct 2023',
        description: [
            'Design the interface and features of the website according to customer requirements.',
            'Understand the working process and implementation of a project',
            'Project participation: Managing water flow information at hydroelectric dams in Japan',
        ],
        skills: [
            'ReactJS',
            'HTML',
            'SCSS',
            'TypeScript',
            'ChartJS',
            'MongoDB',
            'Redux-Saga',
            'NodeJS',
            'Socket.io',
            'Bootstrap',
        ],
        logo: getImageUrl('experience/logo-ivs.jpg'), // Replace with actual logo URL
    },
    {
        role: 'Loading...',
        company: 'Loading...',
        date: 'Present',
        description: [],
        skills: [],
        logo: '', // Replace with actual logo URL
    },
];

const StyledTimelineItem = styled(TimelineItem)(({ theme }) => ({
    '&:before': {
        display: 'none',
    },
}));

const StyledPaper = styled(Paper)(({ theme }) => ({
    padding: '20px',
    backgroundColor: '#4B9FE1',
    color: '#fff',
    boxShadow: 'rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px',
}));

const StyledTimelineContent = styled(TimelineContent)(({ theme }) => ({
    flex: '8',
}));

const StyledTimelineOppositeContent = styled(TimelineOppositeContent)(({ theme }) => ({
    flex: '2',
    paddingRight: '20px',
}));

const Experience = () => {
    return (
        <div id="experience" className="experience-container">
            {/* <Typography variant="h2" gutterBottom style={{ color: '#fff', textAlign: 'center' }}>
                    Experience
                </Typography> */}
            <div className="title">
                <h1>Experience</h1>
            </div>
            <Timeline position="right">
                {workExperiences.map((experience, index) => (
                    <StyledTimelineItem className="all" key={index}>
                        <StyledTimelineOppositeContent className="left">
                            <Typography>{experience.date}</Typography>
                        </StyledTimelineOppositeContent>
                        <TimelineSeparator>
                            <Avatar src={experience.logo} />
                            {index < workExperiences.length - 1 && <TimelineConnector />}
                        </TimelineSeparator>
                        <StyledTimelineContent className="right">
                            <motion.div
                                initial={{ opacity: 0, x: 100 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.2 }}
                                viewport={{ once: false }}
                            >
                                <StyledPaper elevation={3}>
                                    <Typography className="role" variant="h4" component="h1">
                                        {experience.role}
                                    </Typography>
                                    <Typography style={{ fontSize: '16px' }}>{experience.company}</Typography>
                                    <Typography className="date">{experience.date}</Typography>

                                    <Typography component="div">
                                        <ul>
                                            {experience.description.map((item, index) => {
                                                return (
                                                    <li style={{ fontSize: '14px' }} key={index}>
                                                        {item}
                                                    </li>
                                                );
                                            })}
                                        </ul>
                                    </Typography>
                                    <Typography style={{ marginTop: '20px' }} variant="body2">
                                        {experience.skills.length !== 0 ? 'Skill:' : ''}{' '}
                                        {experience.skills.map((item) => (
                                            <Tag color="blue" key={item}>
                                                {item}
                                            </Tag>
                                        ))}
                                    </Typography>
                                </StyledPaper>
                            </motion.div>
                        </StyledTimelineContent>
                    </StyledTimelineItem>
                ))}
            </Timeline>
        </div>
    );
};

export default Experience;
