"use client";

import React, { useEffect } from "react";
import { Container } from "react-bootstrap";
import MainHeading from "./MainHeading";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Image from "next/image";
import Link from "next/link";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Autoplay } from "swiper/modules";
const servicesData = [
    { img: "/bike-img.png", title: "Bike", subtitle: "Your fastest choice", desc: "Bajaj Boxer, Haojue HJ125, and similar models", link: "/" },
    { img: "/comfort-img.png", title: "Comfort", subtitle: "More comfort during the ride", desc: "Kia Rio, Mitsubishi Mirage, and Suzuki Dzire", link: "/" },
    { img: "/economy-img.png", title: "Economy", subtitle: "For basic affordable rides", desc: "Kia Rio, Volkswagen Polo, and Hyundai Solaris", link: "/" },
    { img: "/rickshaw-img.png", title: "Rickshaw", subtitle: "For local, low-cost trips", desc: "Piaggio Ape, TVS King, and similar models", link: "/" },
];

export const ServicesSection = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000,           // match previous smooth speed
            easing: 'ease-out-cubic', // consistent easing
            once: false,              // repeat on scroll
            mirror: false,            // subtle animation only
        });
    }, []);

    return (
        <section className="services-sections">
            <Container>
                {/* Heading */}
                <div data-aos="fade-up" data-aos-delay="100">
                    <MainHeading headingspan="Service" title="Discover all the Services Class" />
                </div>

                {/* Swiper Cards */}
                <Swiper
                    spaceBetween={25}
                    slidesPerView="auto"
                    modules={[Autoplay]}
                    autoplay={{
                        delay: 2500, // time between slides in ms
                        disableOnInteraction: false, // continue autoplay after user interaction
                    }}
                >
                    {servicesData.map((item, index) => (
                        <SwiperSlide key={index}>
                            <div
                                className="services-card"
                                data-aos="fade-up"
                                data-aos-delay={200 + index * 150} // sequential popup
                                data-aos-offset="100"
                            >
                                {/* Image */}
                                <div data-aos="zoom-in" data-aos-delay={250 + index * 150}>
                                    <Image src={item.img} alt={item.title} height={200} width={200} />
                                </div>

                                {/* Content */}
                                <div className="services-card-content" data-aos="fade-up" data-aos-delay={300 + index * 150}>
                                    <h4>{item.title}</h4>
                                    <span>{item.subtitle}</span>
                                    <p>{item.desc}</p>
                                    <Link className="theme-btn theme-btn-secondary theme-btn-secondary-border" href={item.link}>
                                        Book a Ride
                                    </Link>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </Container>
        </section>
    );
};
