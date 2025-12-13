"use client";

import React, { useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import MainHeading from './MainHeading';
import Image from 'next/image';
import Link from 'next/link';
import AOS from 'aos';
import 'aos/dist/aos.css';

const worksCardsdata = [
    {
        iconsrc: '/works-icon1.png',
        title: 'Download App & create a free account',
        para: 'Tristique morbi pulvinar euismod fringilla blandit proin auctor. Dignissim quis vitae ac augue suspendisse. Vitae non turpis vitae senectus. Neque tristique convallis lectus egestas.',
        num: '01'
    },
    {
        iconsrc: '/works-icon1.png',
        title: 'Choose your preferred ride',
        para: 'Select the vehicle and time that suits your needs. Enjoy a hassle-free experience with KingsRide.',
        num: '02'
    },
    {
        iconsrc: '/works-icon1.png',
        title: 'Start your journey safely',
        para: 'Track your ride, get updates, and arrive at your destination with comfort and safety.',
        num: '03'
    }
];

export const Works = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000,           // smooth speed
            easing: 'ease-out-cubic', // consistent easing
            once: false,              // repeat on scroll
            mirror: false,
        });
    }, []);

    return (
        <section className='works'>
            <Container>
                <div className="works-wrapper">
                    {/* MainHeading is already animated, do not animate it again */}
                    <div className="white-main-heading">
                        <MainHeading
                            headingspan="Easy Steps"
                            title="How it Works"
                            para="Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation"
                        />
                    </div>

                    {/* Works cards */}
                    <div className="works-card-main">
                        <Row>
                            {worksCardsdata.map((item, index) => (
                                <Col lg="4" md="6" sm="12" key={index}>
                                    {/* Parent div for animating the whole card */}
                                    <div className='worsks-card' data-aos="fade-up" data-aos-delay={100 + index * 150}>
                                        <div className="works-card">
                                            <div className="icon">
                                                <Image
                                                    src={item.iconsrc}
                                                    alt={item.title}
                                                    height={72}
                                                    width={69.01}
                                                />
                                            </div>
                                            <div className="works-card-content">
                                                <h4>{item.title}</h4>
                                                <p>{item.para}</p>
                                                <div className="works-card-num">
                                                    {item.num}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                            ))}
                        </Row>

                        {/* Bottom section */}
                        <div className="works-bottom" data-aos="fade-up" data-aos-delay={600}>
                            <strong>Get 50% off on your first order! Grab it now</strong>
                            <div className="works-btn-main">
                                <Link href="/" className='theme-btn theme-btn-secondary' data-aos="zoom-in" data-aos-delay={650}>
                                    <Image
                                        src="/google-play-img.png"
                                        alt="Google Play"
                                        width={100}
                                        height={50}
                                        className="img-fluid"
                                    />
                                </Link>
                                <Link href="/" className='theme-btn' data-aos="zoom-in" data-aos-delay={700}>
                                    <Image
                                        src="/app-store-img.png"
                                        alt="App Store"
                                        width={100}
                                        height={50}
                                        className="img-fluid"
                                    />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
};
