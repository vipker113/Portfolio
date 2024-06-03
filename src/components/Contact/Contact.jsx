import React, { useState } from 'react';
import './Contact.scss';
import { Box, Button, TextField } from '@mui/material';
import emailjs from 'emailjs-com';

const Contact = () => {
    const [formData, setFormData] = useState({
        company: '',
        email: '',
        message: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const serviceID = 'your_service_id';
        const templateID = 'your_template_id';
        const userID = 'your_user_id';

        emailjs
            .send(
                serviceID,
                templateID,
                {
                    from_name: formData.company, // Tên biến có thể thay đổi theo yêu cầu của bạn
                    message: formData.message,
                    reply_to: formData.email,
                },
                userID,
            )
            .then(
                (response) => {
                    console.log('SUCCESS!', response.status, response.text);
                    alert('Your message has been sent successfully!');
                    setFormData({ company: '', email: '', message: '' });
                },
                (err) => {
                    console.log('FAILED...', err);
                    alert('Failed to send your message. Please try again later.');
                },
            );
    };

    return (
        <div id="contact" className="contact-container">
            <div className="title">
                <h1>Contact</h1>
            </div>
            <Box className="contact-form" component="form" onSubmit={handleSubmit}>
                <div className="email-company">
                    <TextField
                        className="input"
                        name="company"
                        label="Your Company"
                        value={formData.company}
                        onChange={handleChange}
                        sx={{
                            marginBottom: 2,
                            backgroundColor: 'transparent',
                            borderRadius: 1,
                        }}
                    />
                    <TextField
                        className="input"
                        name="email"
                        label="Your Email"
                        value={formData.email}
                        onChange={handleChange}
                        sx={{
                            marginBottom: 2,
                            backgroundColor: 'transparent',
                            borderRadius: 1,
                        }}
                    />
                </div>
                <TextField
                    className="input"
                    fullWidth
                    name="message"
                    label="Your Message"
                    multiline
                    rows={9}
                    value={formData.message}
                    onChange={handleChange}
                    sx={{
                        marginBottom: 2,
                        backgroundColor: 'transparent',
                        borderRadius: 1,
                    }}
                />
                <Button
                    type="submit"
                    className="send-btn"
                    sx={{
                        background: 'linear-gradient(to right, #FF512F, #F09819)',
                        color: 'white',
                        fontWeight: 'bold',
                        borderRadius: 1,
                    }}
                >
                    Send
                </Button>
            </Box>
        </div>
    );
};

export default Contact;
