import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Footer.scss';
const Footer = () => {
  let url=""
  return (
    <Container className="footer p-5">
    <Row>
            <Col md={4}>
          <p> H#34-0 (4th Floor), Road #24 <br />
          Now DOHS, Mohakahali, Dhaka, Bangladesh <br/>
          Phone:  018XXXXXXXX<br />
          Email:info@gmail.com</p>       
            </Col>
            <Col md={8}>
            <Row>
            <Col md={4}>
                    <ul className="footer-list">
                <li className="headline-footer">Company</li>
                <br/>
                            <li><a href={url}>About</a></li>
                            <li><a href={url}>Site Map</a></li>
                            <li><a href={url}>Support Center</a></li>
                            <li><a href={url}>Terms Condition</a></li>
                            <li><a href={url}>Submit Listing</a></li>
                    </ul>
            </Col>
            <Col md={4}>
                    <ul className="footer-list">
                <li className="headline-footer">Quick Links</li>
                <br/>
                            <li><a href={url}>Quick Links</a></li>
                            <li><a href={url}>Rentals</a></li>
                            <li><a href={url}>Sales</a></li>
                            <li><a href={url}>Contact</a></li>
                <li><a href={url}>Terms Condition</a></li>
                <li><a href={url}>Our Blog</a></li>
                    </ul>
            </Col>
            <Col md={4}>
                    <div className="footer-list">
                <p className="headline-footer">About Us</p>
                <p>We are the top real estate agency in sydney.With agents available to answer any question 24/7</p>
                <ul className="footer-social">
          </ul>
                    </div>
            </Col>
            </Row>
    </Col>
</Row>
</Container>
  );
};

export default Footer;