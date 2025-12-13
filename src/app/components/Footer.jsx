'use client';
import Link from 'next/link'
import React from 'react'
import { Col, Container, Row, Form, Button, Image } from 'react-bootstrap';

// import Form from 'react-bootstrap/Form';
export default function Footer() {
  return (
    <footer className='footer'>
      <Container>
        <Row >
          <Col lg="6" md="12" >
            <div className="footer-main">
              <Image
                src="/footerlogo.png"
                width={150}
                height={50}
              />


              <strong>Subscribe Newsletter</strong>
              <p>Be the first to receive all latest post in your inbox</p>
              <Form>
                <Form.Group className="mb-3 footer-form" controlId="exampleForm.ControlInput1">
                  <Form.Control type="email" placeholder="name@example.com" />
                  <Button className='theme-btn ' >Subscribe</Button>
                </Form.Group>
                <div className="footer-contact">
                  <a href="mailto:Support@example.com">Support@example.com</a> <span>|</span>
                  <a href="tel:+1234567891">+1 234 567 891</a>
                </div>


              </Form>
            </div>
          </Col>
          <Col lg="3" md="12" >
            <div className="footer-content">
              <h4>Quick Links</h4>
              <div className="footer-links">
                <Link href="/">
                  Home
                </Link>
                <Link href="/">
                  About us
                </Link>
                <Link href="/">
                  Pricing
                </Link>
                <Link href="/">
                  Contact us
                </Link>
              </div>
            </div>
          </Col>
          <Col lg="3" md="12" >
            <div className="footer-content">
              <h4>Download App</h4>
              <div className="hero-btm-main">
                <Link href="/" className='theme-btn theme-btn-secondary '>
                  <Image
                    src="/google-play-img.png"
                    alt="Logo"
                    width={100}
                    height={50}
                    className="img-fluid"
                  />
                </Link>
                <Link href="/" className='theme-btn'>
                  <Image
                    src="/app-store-img.png"
                    alt="Logo"
                    width={100}
                    height={50}
                    className="img-fluid"
                  /></Link>
              </div>
            </div></Col>

        </Row>
        <div className="footer-bottom">
          <p className="footer-tex">
            &copy; {new Date().getFullYear()} Your Company. All Rights Reserved.
          </p>

        </div>
      </Container>
    </footer >
  )
}
