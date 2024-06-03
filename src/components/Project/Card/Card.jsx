import React, { useState } from 'react';
import './Card.scss';
import { Card as CardAntd, Modal, Button, Tag } from 'antd';

const Card = ({ title, description, imgSrc, videoSrc, githubLink, tags }) => {
    const [isHovered, setIsHovered] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleMouseEnter = () => setIsHovered(true);
    const handleMouseLeave = () => setIsHovered(false);
    const handleCardClick = () => setIsModalOpen(true);
    const handleCloseModal = () => setIsModalOpen(false);

    return (
        <>
            <CardAntd
                hoverable
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                onClick={handleCardClick}
                cover={
                    <div className="card-media">
                        {isHovered ? <video src={videoSrc} autoPlay loop muted /> : <img alt={title} src={imgSrc} />}
                    </div>
                }
            >
                <div className="card-content">
                    <CardAntd.Meta className="card-meta" title={title} description={description} />
                    <div className="card-tags">
                        {tags.map((tag, index) => (
                            <Tag className="card-tag" key={index}>
                                {tag}
                            </Tag>
                        ))}
                    </div>
                    <Button type="primary" href={githubLink} target="_blank" style={{ marginTop: '20px' }}>
                        View in Github
                    </Button>
                </div>
            </CardAntd>

            <Modal title={title} visible={isModalOpen} onCancel={handleCloseModal} footer={null} width={800}>
                <video src={videoSrc} controls style={{ width: '100%' }} />
            </Modal>
        </>
    );
};

export default Card;
