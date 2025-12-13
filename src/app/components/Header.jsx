"use client";
import Link from 'next/link';
import { Container, Offcanvas, Button } from 'react-bootstrap';
import Image from "next/image";
import { useEffect, useState, useRef } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { RiMenuLine } from '@remixicon/react';

export const Header = () => {
    const [showOffcanvas, setShowOffcanvas] = useState(false);
    const mountedRef = useRef(false);

    const handleClose = () => {
        if (mountedRef.current) setShowOffcanvas(false);
    };
    const handleShow = () => {
        if (mountedRef.current) setShowOffcanvas(true);
    };

    useEffect(() => {
        mountedRef.current = true;

        // Only run AOS on client after mount
        AOS.init({
            duration: 1000,
            easing: 'ease-out-cubic',
            once: false,
            mirror: false,
        });

        // Cleanup on unmount
        return () => {
            mountedRef.current = false;
        };
    }, []);

    return (
        <header className="header">
            <Container>
                <div className="header-top d-flex justify-content-between align-items-center">

                    {/* Logo */}
                    <div className="logo-wrapper" data-aos="fade-down" data-aos-delay="100">
                        <Link href="/">
                            <Image src="/logo.png" alt="Logo" width={150} height={50} />
                        </Link>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="d-none d-md-flex header-btn-main align-items-center gap-3">
                        <div data-aos="fade-right" data-aos-delay="200">
                            <Link href="/" className='header-link'>About</Link>
                        </div>
                        <div className="header-btn-wrapper d-flex gap-2">
                            <div data-aos="zoom-in-up" data-aos-delay="300">
                                <Link href="/" className='theme-btn theme-btn-secondary theme-btn-secondary-border'>
                                    Drive With Us
                                </Link>
                            </div>
                            <div data-aos="zoom-in-up" data-aos-delay="400">
                                <Link href="/" className='theme-btn'>
                                    Book a Ride
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* Mobile Hamburger Button */}
                    <div className="d-md-none">
                        <Button variant="outline-primary" onClick={handleShow}>
                            <RiMenuLine size={50} />
                        </Button>
                    </div>

                    {/* Offcanvas Menu */}
                    <Offcanvas show={showOffcanvas} onHide={handleClose} placement="start">
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title>
                                <Image src="/logo.png" alt="Logo" width={120} height={40} />
                            </Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                            <div className="d-flex flex-column gap-3">
                                <Link href="/" className='header-link' onClick={handleClose}>About</Link>
                                <Link href="/" className='theme-btn theme-btn-secondary theme-btn-secondary-border' onClick={handleClose}>
                                    Drive With Us
                                </Link>
                                <Link href="/" className='theme-btn' onClick={handleClose}>
                                    Book a Ride
                                </Link>
                            </div>
                        </Offcanvas.Body>
                    </Offcanvas>

                </div>
            </Container>
        </header>
    );
};
