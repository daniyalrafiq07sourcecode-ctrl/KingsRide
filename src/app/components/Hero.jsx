"use client";
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Hero = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000,           // smooth animation duration
            easing: 'ease-out-cubic', // smooth easing
            once: false,              // repeat on scroll
            mirror: false,            // subtle animation only
        });
    }, []);

    return (
        <section className="hero-section">
            <Container>
                <div className="hero-main">

                    <div className="hero-content-main">
                        <Row>
                            <Col lg={8} md={12}>
                                <div className="hero-content">
                                    <h1 className="hero-title" data-aos="fade-up" data-aos-delay="100">
                                        <span>Kings Ride</span> Your Reliable Ride Companion in Karachi!
                                    </h1>
                                    <p className="hero-paragraph" data-aos="fade-up" data-aos-delay="200">
                                        Experience the ultimate in comfort and convenience with our top-rated ride services. Whether you're heading to the airport, exploring the city, or need a quick ride across town, we've got you covered.
                                    </p>
                                </div>
                            </Col>

                            <Col lg={4} md={12}>
                                <div className="hero-content hero-content-right">
                                    <div className="hero-btm-main" data-aos="fade-left" data-aos-delay="300">
                                        <div data-aos="zoom-in" data-aos-delay="400">
                                            <Link href="/" className='theme-btn theme-btn-secondary '>
                                                <Image src="/google-play-img.png" alt="Google Play" width={100} height={50} className="img-fluid" />
                                            </Link>
                                        </div>
                                        <div data-aos="zoom-in" data-aos-delay="500">
                                            <Link href="/" className='theme-btn'>
                                                <Image src="/app-store-img.png" alt="App Store" width={100} height={50} className="img-fluid" />
                                            </Link>
                                        </div>
                                    </div>
                                    <p data-aos="fade-left" data-aos-delay="600">
                                        The best application to manage your customers worldwide.
                                    </p>
                                </div>
                            </Col>
                        </Row>
                    </div>

                    {/* Hero image */}
                    <div className="hero-img-main" data-aos="fade-up" data-aos-delay="700">
                        <Image src="/hero-img.png" alt="Hero Image" width={950} height={400} className="hero-img img-fluid" />
                    </div>

                    {/* Hero bottom cards */}
                    <div className="hero-bottom-main">
                        <Row className='align-items-center justify-content-center'>
                            {[1, 2, 3].map((i) => (
                                <Col key={i} lg={4} md={6} sm={12}>
                                    <div className="hero-bottom-card" data-aos="fade-up" data-aos-delay={800 + i * 100}>
                                        <div className="icon">
                                            <Image
                                                src={`/hero-bottom-icon${i}.png`}
                                                alt={`Icon ${i}`}
                                                width={72}
                                                height={72}
                                                className='img-fluid'
                                            />
                                        </div>
                                        <div className="hero-bottom-card-content">
                                            <h6>
                                                {i === 1 && "Best Price Guaranteed."}
                                                {i === 2 && "24/7 Customer care."}
                                                {i === 3 && "Easy Bookings."}
                                            </h6>
                                            <p>
                                                {i === 1 && "Best Price Guaranteed."}
                                                {i === 2 && "Enjoy competitive rates for all your travel needs."}
                                                {i === 3 && "Quick, hassle-free bookings for everyone."}
                                            </p>
                                        </div>
                                    </div>
                                </Col>
                            ))}
                        </Row>
                    </div>

                </div>
            </Container>
        </section>
    );
};

export default Hero;
