import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Footer.css'
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {fab, faTwitterSquare, faFacebook, faLinkedin, faGithub} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
    return (
        <div className='footer'>
            <Row xs={1} sm={1} md={2} lg={4}> 
                <Col >
                    <Container>
                        <h1 className='brand-name'>Noksha</h1>
                        <p>One of the means of learning digital design.</p>
                        <div>
                        <FontAwesomeIcon icon={faFacebook} />
                       
                        </div>
                    </Container>
                </Col>
                <Col >
               02
                </Col>
                <Col>
               03
                </Col>
                <Col>
               04
                </Col>
            </Row>
        </div>
    );
};

export default Footer;