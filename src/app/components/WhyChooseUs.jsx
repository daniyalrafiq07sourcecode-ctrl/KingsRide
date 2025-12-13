"use client";

import React, { useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import MainHeading from './MainHeading';
import Image from 'next/image';
import AOS from 'aos';
import 'aos/dist/aos.css';

export const WhyChooseUs = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,           // consistent with other sections
      easing: 'ease-out-cubic', // smooth easing
      once: false,              // repeat on scroll
      mirror: false,            // subtle effect
    });
  }, []);

  const cards = [
    {
      title: "Easy Bookings.",
      text: "Sagittis nunc orci posuere eget adipiscing quisque. Vitae commodo urna vitae placerat. Aliquam vestibulum velit amet lacus morbi. Volutpat amet a duis suscipit morbi tellus sed morbi cras.",
      icon: "/why-choose-us-icon.png"
    },
    {
      title: "Affordable Rides.",
      text: "Enjoy cost-effective rides without compromising comfort or safety. Perfect for everyday travel needs.",
      icon: "/why-choose-us-icon.png"
    },
    {
      title: "24/7 Support.",
      text: "Our support team is available round-the-clock to assist you with your bookings and inquiries.",
      icon: "/why-choose-us-icon.png"
    }
  ];

  return (
    <section className='why-choose-us'>
      <Container>
        {/* Heading */}
        <div data-aos="fade-up" data-aos-delay="100">
          <MainHeading
            headingspan="Why Use KingsRide"
            title="Seddo eiusmod tempor inci didunt ut labore et dolore magna aliqua."
          />
        </div>

        <div className="why-choose-us-wrapper">
          <Row>
            {/* Left Image */}
            <Col lg={4} md={12}>
              <div className="img-box-contet" data-aos="fade-right" data-aos-delay="200">
                <Image
                  src="/why-choose-us-img.png"
                  height={580}
                  width={400}
                  alt="Why Choose Us Image"
                />
              </div>
            </Col>

            {/* Right Cards */}
            <Col lg={8} md={12}>
              <div className="why-choose-us-cards-main">
                {cards.map((card, index) => (
                  <div
                    className="why-choose-us-card"
                    key={index}
                    data-aos="fade-up"
                    data-aos-delay={300 + index * 150} // sequential popup
                  >
                    <div className="icon" data-aos="zoom-in" data-aos-delay={350 + index * 150}>
                      <Image
                        alt='why choose us icon'
                        src={card.icon}
                        height={72}
                        width={72}
                      />
                    </div>
                    <div className="why-choose-us-card-content" data-aos="fade-up" data-aos-delay={400 + index * 150}>
                      <h6>{card.title}</h6>
                      <p>{card.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </section>
  );
};
