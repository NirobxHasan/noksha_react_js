import React, { useEffect, useState } from 'react';
import { Carousel, Col, Container, Row } from 'react-bootstrap';
import NavBar from '../NavBar/NavBar';
import img1 from '../../images/N1.jpg';
import img2 from '../../images/N2.jpg';
import img3 from '../../images/03.jpg';
import './Header.css'
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle, faCoffee, faHeadset, faPowerOff, faSwatchbook } from '@fortawesome/free-solid-svg-icons'
import Course from '../Course/Course';
import useCourses from '../hooks/useCourses';
const Header = () => {

    const [courses] = useCourses();
    return (
        <div>
           
          {/* Image slider */}
            <Carousel >
                <Carousel.Item  className="carosel-item">
                    <img
                    className="d-block w-100"
                    src={img1}
                    alt="First slide"
                    />
                    <Carousel.Caption>
                    <h3>Create account</h3>
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
                    <h3>Join Membership</h3>
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
                    <h3>Start Learning</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>

            <div>
                <div className='mx-auto m-5 w-50 '>
                    <h2 className='fw-bold text-center'>Why An Scholercity Out Of The Ordinary</h2>
                    <p className='text-center'>You don't have to struggle alone, you've got our assistance and help.</p>
                </div>

                <div className='m-4' >
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

            {/* courses  */}
            <Container className='my-5' >
                <h1 className='fw-bold'>Find The Right <br />
                    Online Course For You</h1>
                    <p>You don't have to struggle alone, you've got our assistance and help.</p>
                   

                   

                <Row xs={1} md={2} className="m-4">
                    {
                        courses.slice(0,4).map(course => <Course course={course} />)
                    }
                 
                </Row>
            
            </Container>


           
                
        </div>
    );
};

export default Header;