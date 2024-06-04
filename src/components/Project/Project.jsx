import React, { useState } from 'react';
import './Project.scss';
import Card from './Card/Card';
import { getImageUrl } from '../../help/utils';
import { Row, Col } from 'antd';

import { motion } from 'framer-motion';

const container = (delay) => ({
    hidden: {
        x: -100,
        opacity: 0,
    },
    whileInView: {
        x: 0,
        opacity: 1,
        transition: {
            delay: delay,
            duration: 1,
        },
    },
});

const videos = [
    {
        videoSrc: getImageUrl('projects/project1.mp4'),
        imgSrc: getImageUrl('projects/thumbnail1.png'),
        title: 'Đồ án hệ thống quản lý trường Đại học Công nghiệp TP HCM',
        description:
            'Hệ thống cho phép khoa quản lý phòng học, học phần, lịch học, tài khoản, thông báo. Sinh viên và giảng viên có để đăng nhập để xem lịch, thông tin cá nhân, thông báo, đăng kí học phần. Và nhiều chức năng khác.',
        githubLink: 'https://github.com/vipker113/DoAnTotNghiep_QuanLyPhongHoc',
        tags: [
            'ReactJS',
            'TypeScript',
            'SCSS',
            'NodeJS',
            'Express',
            'MongoDB',
            'Socket.io',
            'Ant Design',
            'Bootstrap',
            'Redux',
        ],
    },
    {
        videoSrc: getImageUrl('projects/project2.mp4'),
        imgSrc: getImageUrl('projects/thumbnail2.png'),
        title: 'Youtube Clone',
        description:
            'Website mô phỏng lại youtube, sử dụng Youtube API V3 để lấy dữ liệu video, xử lý dữ liệu, phân loại video, tìm kiếm video, xem video, xem comment, xem video liên quan.',
        githubLink: 'https://github.com/vipker113/YouTube-Clone',
        tags: ['ReactJS', 'HTML', 'CSS', 'JavaScript', 'RESTful API', 'Youtube API V3'],
    },
];

const Project = () => {
    return (
        <section id="project" className="project-container mt-5">
            <div className="title">
                <h1>Projects</h1>
            </div>
            <Row className="card-container" style={{ width: '80%', margin: 'auto' }} gutter={[40]}>
                {videos.map((video, index) => (
                    <Col key={index} xs={24} sm={24} md={12}>
                        <motion.div
                            className="card-element"
                            variants={container(0.8 * (index + 0.2))}
                            initial="hidden"
                            whileInView="whileInView"
                        >
                            <Card {...video} />
                        </motion.div>
                    </Col>
                ))}
            </Row>
        </section>
    );
};

export default Project;
