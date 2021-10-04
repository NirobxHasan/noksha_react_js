import React from 'react';
import { Col, Container, FormControl, InputGroup, Row,Button } from 'react-bootstrap';
import './Footer.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const Footer = () => {
    return (
        <div className='footer'>
            <Row xs={1} sm={1} md={2} lg={4}> 
                <Col className="d-flex justify-content-center align-items-center">
                    <Container >
                        <div>
                            <h1 className='brand-name'>Noksha</h1>
                            <p>One of the means of learning digital design.</p>
                        </div>
                      
                    </Container>
                </Col>
                <Col >
                    <Container>
                        <h4 className='title'>Company</h4>
                        <a href="">About</a>
                        <a href="">Courses</a>
                        <a href="">Event</a>
                        <a href="">Instructor</a>
                        <a href="">Become a Teacher</a>
                    </Container>
                </Col>
                <Col>
                <Container>
                        <h4 className='title'>Platform</h4>
                        <a href="">Browse Library</a>
                        <a href="">Library</a>
                        <a href="">Partner</a>
                        <a href="">News & Blogs</a>
                        <a href="">FAQ</a>
                    </Container>
                </Col>
                <Col className="d-flex justify-content-center align-items-center">
                <Container>
                        <h4 className='title'>Subscribe</h4>
                        <InputGroup className="mb-3">
                            <FormControl className="input-field"
                            placeholder="your email address"
                            aria-label="Recipient's username"
                            aria-describedby="basic-addon2"
                            />
                            <Button className="btn-color" id="button-addon2">
                            Button
                            </Button>
                        </InputGroup>
                    </Container>
                </Col>
            </Row>
        </div>
    );
};

export default Footer;