'use client';

import React, { useState, useEffect } from 'react';
import { Accordion, Row, Col, Container } from 'react-bootstrap';
import MainHeading from './MainHeading';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Faq = () => {
    const [activeTab, setActiveTab] = useState('faq');

    const faqContent = [
        { title: 'How do I book a ride?', body: 'You can book a ride using our mobile app or website...' },
        { title: 'What payment methods are accepted?', body: 'We accept credit/debit cards, digital wallets, and cash payments...' },
        { title: 'Can I schedule a ride in advance?', body: 'Yes! You can schedule rides up to 7 days in advance...' },
        { title: 'What if my driver is late?', body: 'You can track your driver in real-time and contact them...' },
        { title: 'Is my personal information safe?', body: 'Yes. We use advanced encryption to protect your information.' },
    ];

    const driverContent = [
        { title: 'How do I become a driver?', body: 'Sign up on our website or app, submit required documents...' },
        { title: 'What are the driver requirements?', body: 'Drivers must be at least 21 years old, have a valid license...' },
        { title: 'How is driver payment calculated?', body: 'Drivers earn a base fare plus distance/time-based rates...' },
        { title: 'Can I choose my working hours?', body: 'Yes! Drivers can log in and out anytime...' },
        { title: 'How do I get support as a driver?', body: 'Drivers can contact our 24/7 support through the app...' },
    ];

    const content = activeTab === 'faq' ? faqContent : driverContent;
    const midIndex = Math.ceil(content.length / 2);
    const leftColumn = content.slice(0, midIndex);
    const rightColumn = content.slice(midIndex);

    // Initialize AOS
    useEffect(() => {
        AOS.init({
            duration: 800,
            easing: 'ease-out-cubic',
            once: false,  // animate only once
            mirror: false,
        });
    }, []);

    // Refresh AOS when FAQ content changes (tab switch)
    useEffect(() => {
        // wait for DOM to update
        const timeout = setTimeout(() => {
            const faqItems = document.querySelectorAll('.faq-main [data-aos]');
            faqItems.forEach((el) => {
                el.classList.remove('aos-animate'); // reset animation
            });
            AOS.refreshHard(); // trigger AOS animation for new items
        }, 50);

        return () => clearTimeout(timeout);
    }, [activeTab]);

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    return (
        <section className="faq-section py-5">
            <Container>
                <MainHeading
                    headingspan="FAQ’s"
                    title="Frequently Asked Questions"
                    para="Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua..."
                />

                <div className="faq-tabs-main mb-4 text-center" data-aos="fade-down" data-aos-duration="800">
                    <button
                        className={`faq-tab ${activeTab === 'faq' ? 'active' : ''}`}
                        onClick={() => handleTabClick('faq')}
                        data-aos="fade-right"
                        data-aos-delay="100"
                        data-aos-duration="600"
                    >
                        For Riders
                    </button>
                    <button
                        className={`faq-tab ${activeTab === 'drivers' ? 'active' : ''}`}
                        onClick={() => handleTabClick('drivers')}
                        data-aos="fade-left"
                        data-aos-delay="200"
                        data-aos-duration="600"
                    >
                        For Drivers
                    </button>
                </div>

                <div className="faq-main">
                    <Accordion defaultActiveKey="0">
                        <Row>
                            <Col lg={6} md={12}>
                                {leftColumn.map((item, index) => (
                                    <Accordion.Item
                                        key={index}
                                        eventKey={index.toString()}
                                        data-aos="fade-up"
                                        data-aos-delay={index * 100}
                                        data-aos-once="true"
                                    >
                                        <Accordion.Header>{item.title}</Accordion.Header>
                                        <Accordion.Body>{item.body}</Accordion.Body>
                                    </Accordion.Item>
                                ))}
                            </Col>
                            <Col lg={6} md={12}>
                                {rightColumn.map((item, index) => (
                                    <Accordion.Item
                                        key={index + midIndex}
                                        eventKey={(index + midIndex).toString()}
                                        data-aos="fade-up"
                                        data-aos-delay={(index + midIndex) * 100}
                                        data-aos-once="true"
                                    >
                                        <Accordion.Header>{item.title}</Accordion.Header>
                                        <Accordion.Body>{item.body}</Accordion.Body>
                                    </Accordion.Item>
                                ))}
                            </Col>
                        </Row>
                    </Accordion>
                </div>
            </Container>
        </section>
    );
};

export default Faq;
