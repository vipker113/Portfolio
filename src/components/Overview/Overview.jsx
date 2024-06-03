import React from 'react';
import { getImageUrl } from '../../help/utils';
import './Overview.scss';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';

const container = (delay) => ({
    hidden: { x: -100, opacity: 0 },
    visible: {
        x: 0,
        opacity: 1,
        transition: {
            delay: delay,
            duration: 0.5,
        },
    },
});

const Overview = () => {
    return (
        <div id="overview" className="overview-container">
            <div className="content">
                <motion.h1 variants={container(1)} initial="hidden" animate="visible" className="title">
                    Front-end Developer
                </motion.h1>
                <motion.p variants={container(1.5)} initial="hidden" animate="visible" className="description">
                    <TypeAnimation
                        sequence={['Hi! I am Nghi', 1000, 'Hi! I am Nghi', 1000, 'Hi! I am Nghi', 1000, '', 1000, '']}
                        wrapper="span"
                        speed={50}
                        style={{ fontSize: '1.5em', display: 'inline-block' }}
                        repeat={Infinity}
                    />
                </motion.p>
                <motion.p variants={container(2)} initial="hidden" animate="visible" className="description">
                    I'm a software engineering student about to graduate with good communication and quick learning
                    skills.
                </motion.p>
                <motion.p variants={container(2.5)} initial="hidden" animate="visible" className="description">
                    I enjoy coding and the challenge of learning something new every day.
                </motion.p>
                <motion.a
                    variants={container(3)}
                    initial="hidden"
                    animate="visible"
                    className="contactBtn"
                    href="mailto:nghiaa1ad0@gmail.com"
                >
                    Contact Me
                </motion.a>
            </div>
            <motion.div
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                className="avt"
            >
                <img className="avatarImg" src={getImageUrl('about/avt.jpg')} alt="" />
            </motion.div>
            {/* <div className="topBlur"></div> */}
            {/* <div className={styles.bottomBlur}></div> */}
        </div>
    );
};

export default Overview;
