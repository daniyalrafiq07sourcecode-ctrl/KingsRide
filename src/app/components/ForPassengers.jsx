"use client";

import React, { useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import FeaturesHeading from './FeaturesHeading';
import Image from 'next/image';
import AOS from 'aos';
import 'aos/dist/aos.css';

export const ForPassengers = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000,           // consistent with other sections
            easing: 'ease-out-cubic', // smooth easing
            once: false,              // repeat on scroll
            mirror: false,            // subtle effect
        });
    }, []);

    return (
        <section className='passengers'>
            <Container>
                <Row>
                    {/* Text Content */}
                    <Col lg={6} md={12}>
                        <div data-aos="fade-right" data-aos-delay="200">
                            <FeaturesHeading
                                headingspan="for passengers"
                                title="Aliquam vestibulum velit amet lacus morbi"
                                para="Tristique morbi pulvinar euismod fringilla blandit proin auctor. Dignissim quis vitae ac augue suspendisse. Vitae non turpis vitae senectus. Neque tristique convallis lectus egestas et non ante in ullamcorper. Posuere luctus ridiculus mauris iaculis pulvinar mattis ut. Sagittis nunc orci posuere eget adipiscing quisque. Vitae commodo."
                                listheading="Posuere luctus ridiculus. "
                                listpara="Posuere luctus ridiculus. Tristique morbi pulvinar euismod fringilla blandit proin auctor. Dignissim quis vitae ac augue suspendisse. Vitae non turpis vitae senectus. Neque tristique convallis lectus egestas et non ante in ullamcorper."
                                listheadingsec="Posuere luctus ridiculus. "
                                listparasec="Posuere luctus ridiculus. Tristique morbi pulvinar euismod fringilla blandit proin auctor. Dignissim quis vitae ac augue suspendisse. Vitae non turpis vitae senectus. Neque tristique convallis lectus egestas et non ante in ullamcorper."
                            />
                        </div>
                    </Col>

                    {/* Image */}
                    <Col lg={6} md={12}>
                        <div className="img-box-contet features-img" data-aos="fade-left" data-aos-delay="300">
                            <Image
                                src="/advanced-features-img3.png"
                                height={500}
                                width={600}
                                alt="Advanced Features Image"
                            />
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};
