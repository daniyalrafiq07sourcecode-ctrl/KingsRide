"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import MainHeading from "./MainHeading";
import AOS from 'aos';
import 'aos/dist/aos.css';

export const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,           // match header/hero smooth speed
      easing: 'ease-out-cubic', // smooth easing
      once: false,              // repeat on scroll
      mirror: false,            // subtle animation only
    });
  }, []);

  return (
    <section className="about-section">
      <Container>
        <div className="about-us-section-main">

          {/* PRO animated heading */}
          <div data-aos="fade-up" data-aos-delay="100">
            <MainHeading
              headingspan="About Us"
              title="Seddo eiusmod tempor inci didunt ut labore et dolore magna aliqua."
            />
          </div>

          <Row>
            {/* LEFT circles */}
            <Col lg={4} md={12}>
              <div className="about-circle-wrapepr">
                <div className="about-circle-main">
                  {[
                    { value: "1M+", label: "Downloads" },
                    { value: "2300+", label: "Reviews" },
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="about-circle"
                      data-aos="zoom-in"
                      data-aos-delay={200 + index * 150} // staggered delay
                      data-aos-offset="100"
                    >
                      <h5>{item.value}</h5>
                      <span>{item.label}</span>
                    </div>
                  ))}
                </div>

                <div className="about-circle-main verticle">
                  {[
                    { value: "100k", label: "Followers" },
                    { value: "20+", label: "Downloads" },
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="about-circle"
                      data-aos="zoom-in"
                      data-aos-delay={500 + index * 150} // staggered delay
                      data-aos-offset="100"
                    >
                      <h5>{item.value}</h5>
                      <span>{item.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Col>


            {/* RIGHT content */}
            <Col lg={8} md={12}>
              <div className="mobile-card">
                {/* IMAGE reveal */}
                <div className="mobile-img" data-aos="fade-up" data-aos-delay="600">
                  <Image
                    src="/mobile-ing.png"
                    alt="Mobile Image"
                    width={300}
                    height={200}
                    className="img-fluid"
                  />
                </div>

                {/* TEXT */}
                <div className="about-sec-content" data-aos="fade-up" data-aos-delay="700">
                  <p>
                    Tristique morbi pulvinar euismod fringilla blandit proin auctor. Dignissim
                    quis vitae ac augue suspendisse. Vitae non turpis vitae senectus. Neque
                    tristique convallis lectus egestas et non ante in ullamcorper.
                  </p>

                  <p>
                    Sagittis nunc orci posuere eget adipiscing quisque. Vitae commodo urna vitae
                    placerat. Aliquam vestibulum velit amet lacus morbi. Volutpat amet a duis
                    suscipit morbi tellus sed morbi cras.
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </section>
  );
};
