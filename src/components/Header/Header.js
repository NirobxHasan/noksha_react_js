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
import { Link } from 'react-router-dom';
import useTeachers from '../hooks/useTeachers';
import Teacher from '../Teacher/Teacher';
const Header = () => {
    const [teachers] =useTeachers();
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
                    <Col className="card card1 m-2 p-3 text-light">
                     <FontAwesomeIcon className="icon fa-4x"  icon={faSwatchbook} />
                            <h4>40 </h4>
                            <h6>Online courses</h6>
                        
                        </Col>
                        <Col  className="card card2 m-2 p-3 text-light">
                        <FontAwesomeIcon className="icon fa-4x"  icon={faCheckCircle} />
                            <h4>Job </h4>
                            <h6>placement Support</h6> 
                        </Col>
                        <Col  className="card card3 m-2 p-3 text-light">
                        <FontAwesomeIcon className="icon fa-4x"  icon={faHeadset} />
                            <h4  >Lifetime</h4>
                            <h6>Slack chat support</h6>
                        </Col>
                        <Col className="card  card4 m-2 p-3 text-light">
                        <FontAwesomeIcon className="icon fa-4x"  icon={faPowerOff} />
                            <h4 >Research</h4>
                            <h6>and Innovation</h6>
                        </Col>
                    </Row>
                </Container>
                </div>
            </div>

            {/* courses  */}
            <Container className='my-5 p-3' >
                <h1 className='fw-bold'>Find The Right <br />
                    Online Course For You</h1>
                    <p>You don't have to struggle alone, you've got our assistance and help.</p>
                   

                   

                <Row xs={1} md={2} className="m-4">
                    {
                        courses.slice(0,4).map(course => <Course course={course} />)
                    }
                 
                </Row>
                <Link className="d-flex justify-content-end text-primary" to="/courses">See More>></Link>
            
            </Container>

            <Container className=''>
                <Row xs={1} sm={1} md={2} lg={2} >
                    <Col lg={4} sm={12} xs={12} className="p-4">
                        <h2 className="text-secondary fw-bold teachers-text">Hello. Our courses has been present for over 5 years in the market. We make the most of all our students.</h2>
                    </Col>
                    <Col lg={8} className="p-3">
                    <div className="teacher-section ">
                        {
                            teachers.slice(0,2).map(teacher => <Teacher teacher={teacher}/>)
                        }
                    </div>
                    </Col>
                    
                </Row>
                <Link className="d-flex justify-content-end text-primary" to="/teachers">See More>></Link>

            </Container>


           
                
        </div>
    );
};

export default Header;