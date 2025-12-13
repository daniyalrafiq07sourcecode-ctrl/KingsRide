'use client'
import { Container } from 'react-bootstrap'
import MainHeading from './MainHeading'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Image from 'next/image';
import { Autoplay } from "swiper/modules";

const testiData = [
    {
        name: 'Sophia L',
        position: 'Creative Director',
        imgsrc: '/testi-img1.svg',
        review: 'Verta’s designs elevated our brand presence, making a real impact with our audience.',
    },
    {
        name: 'Alex K',
        position: 'Operations Lead',
        imgsrc: '/testi-img2.svg',
        review: 'Working with Verta was seamless—they understood our needs and delivered beyond expectations.',
    },
    {
        name: 'Isabella M',
        position: 'Business Owner',
        imgsrc: '/testi-img3.svg',
        review: 'Working with Verta was seamless—they understood our needs and delivered beyond expectations.',
    },
    {
        name: 'Sophia L',
        position: 'Creative Director',
        imgsrc: '/testi-img1.svg',
        review: 'Verta’s designs elevated our brand presence, making a real impact with our audience.',
    },
    {
        name: 'Alex K',
        position: 'Operations Lead',
        imgsrc: '/testi-img2.svg',
        review: 'Working with Verta was seamless—they understood our needs and delivered beyond expectations.',
    },
    {
        name: 'Isabella M',
        position: 'Business Owner',
        imgsrc: '/testi-img3.svg',
        review: 'Working with Verta was seamless—they understood our needs and delivered beyond expectations.',
    },
    {
        name: 'Sophia L',
        position: 'Creative Director',
        imgsrc: '/testi-img1.svg',
        review: 'Verta’s designs elevated our brand presence, making a real impact with our audience.',
    },
    {
        name: 'Alex K',
        position: 'Operations Lead',
        imgsrc: '/testi-img2.svg',
        review: 'Working with Verta was seamless—they understood our needs and delivered beyond expectations.',
    },
    {
        name: 'Isabella M',
        position: 'Business Owner',
        imgsrc: '/testi-img3.svg',
        review: 'Working with Verta was seamless—they understood our needs and delivered beyond expectations.',
    },
    {
        name: 'Sophia L',
        position: 'Creative Director',
        imgsrc: '/testi-img1.svg',
        review: 'Verta’s designs elevated our brand presence, making a real impact with our audience.',
    },
    {
        name: 'Alex K',
        position: 'Operations Lead',
        imgsrc: '/testi-img2.svg',
        review: 'Working with Verta was seamless—they understood our needs and delivered beyond expectations.',
    },
    {
        name: 'Isabella M',
        position: 'Business Owner',
        imgsrc: '/testi-img3.svg',
        review: 'Working with Verta was seamless—they understood our needs and delivered beyond expectations.',
    }
]
export const Testimonials = () => {
    return (
        <section className='testimonials'>
            <Container>
                <MainHeading
                    headingspan="Testimonials"
                    title="Our Happy Clients"
                    para="Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation"
                />
                <Swiper
                    spaceBetween={20}
                    slidesPerView="auto"
                    loop={true}
                    centeredSlides={true}
                    speed={3000}
                    autoplay={{
                        delay: 0,
                        disableOnInteraction: false,
                    }}
                    modules={[Autoplay]}
                >
                    {testiData.map((item, index) => (
                        <SwiperSlide key={index} >
                            <div className="testi-card">
                                <div className="testi-top">
                                    <div className="testi-img-main">
                                        <div className="test-img">
                                            <Image
                                                src={item.imgsrc}
                                                alt={item.name}
                                                width={40}
                                                height={40}

                                            />
                                        </div>
                                        <div className="testi-img-content">
                                            <h6>{item.name}</h6>
                                            <span>{item.position}</span>
                                        </div>
                                    </div>
                                    <div className="img-quote">
                                        <Image
                                            src="/quote.png"
                                            alt="Testimonial Image"
                                            width={40}
                                            height={40}

                                        />
                                    </div>

                                </div>
                                <div className="testi-content">
                                    <p>
                                        {item.review}
                                    </p>
                                </div>
                            </div>
                        </SwiperSlide>

                    ))}


                </Swiper>
            </Container>
        </section>
    )
}
