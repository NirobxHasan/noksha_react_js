import React from 'react';
import { Carousel, Col, Container, Row } from 'react-bootstrap';
import NavBar from '../NavBar/NavBar';
import img1 from '../../images/N1.jpg';
import img2 from '../../images/N2.jpg';
import img3 from '../../images/03.jpg';
import './Header.css'
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle, faCoffee, faHeadset, faPowerOff, faSwatchbook } from '@fortawesome/free-solid-svg-icons'

const Header = () => {
    return (
        <div>
            <NavBar/>
          {/* Image slider */}
            <Carousel >
                <Carousel.Item  className="carosel-item">
                    <img
                    className="d-block w-100"
                    src={img1}
                    alt="First slide"
                    />
                    <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className="carosel-item">
                    <img
                    className="d-block w-100"
                    src={img2}
                    alt="Second slide"
                    />

                    <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className="carosel-item">
                    <img
                    className="d-block w-100"
                    src={img3}
                    alt="Third slide"
                    />

                    <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>

            <div>
                <div className='mx-auto m-5 w-50 '>
                    <h2 className='fw-bold text-center'>Why An Scholercity Out Of The Ordinary</h2>
                    <p className='text-center'>You don't have to struggle alone, you've got our assistance and help.</p>
                </div>

                <div className='m-4' c>
                <Container > 
                    <Row xs={1} md={2} className="g-4 d-flex justify-content-center">
                    <Col className="card card1 m-2 p-3">
                     <FontAwesomeIcon className="icon fa-4x"  icon={faSwatchbook} />
                            <h5 className="text-light" >40 <br/>Online courses</h5>
                        
                        </Col>
                        <Col  className="card card2 m-2 p-3 text-light">
                        <FontAwesomeIcon className="icon fa-4x"  icon={faCheckCircle} />
                            <h5 className="text-light" >Job </h5>
                            <h6>placement Support</h6> 
                        </Col>
                        <Col  className="card card3 m-2 p-3 text-light">
                        <FontAwesomeIcon className="icon fa-4x"  icon={faHeadset} />
                            <h5 className="text-light" >Lifetime</h5>
                            <h6>Slack chat support</h6>
                        </Col>
                        <Col className="card  card4 m-2 p-3 text-light">
                        <FontAwesomeIcon className="icon fa-4x"  icon={faPowerOff} />
                            <h5 className="text-light" >Research</h5>
                            <h6>and Innovation</h6>
                        </Col>
                    </Row>
                </Container>
                </div>
            </div>
                
        </div>
    );
};

export default Header;