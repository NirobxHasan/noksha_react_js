import React, { useState } from 'react';
import { Card, Col, ListGroup,Button, Modal } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Course.css'
const Course = (props) => {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    const {index,title,thumbnail,enroll,description,price,instructor_name,instructor_img} = props.course;
    return (
        
        <Col className='my-3 d-flex justify-content-center ' >
           

            <Card style={{ width: '25rem' , height: '32.5rem'}} className="course-card">
            <Card.Img className="card-img" variant="top" src={thumbnail} />
            <Card.Body >
                <Card.Title className="fw-bold">{title}</Card.Title>
                <Card.Text>
                {description.slice(0,150)} ....
                </Card.Text>
                <div className='d-flex justify-content-between card-info'>
                        <p className='fw-bold'>Enroll {enroll} students</p>
                        <p className='fw-bold'>Price: {price} BDT</p>
                </div>
                
                    <Button onClick={handleShow} className="btn-color w-100 m-0">Details</Button>

                    {/* modal details  */}
                    <Modal show={show} onHide={handleClose}>
                        <Modal.Header closeButton>
                        <Modal.Title>{title}</Modal.Title>
                        </Modal.Header>
                        <img src={thumbnail} alt="" />
                        <div className='p-3 instructor'>
                            <h4 className="text-color-red">Instructor</h4>    
                            <div className="d-flex align-items-center d-flex justify-content-center p-2">
                                <img className="me-4" width="80" src={instructor_img} alt="" />
                                <h5>{instructor_name}</h5>
                            </div>
                        </div>    
                        <h4 className="text-color-red ps-3 pt-5">Course Objective</h4>
                        <Modal.Body>{description}</Modal.Body>
                        <div className='d-flex justify-content-between card-info'>
                            <p className='fw-bold'>Enroll {enroll} students</p>
                            <p className='fw-bold'>Price: {price} BDT</p>
                        </div>
                        <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                        <Button className="btn-color" variant="primary" onClick={handleClose}>
                            Buy Now
                        </Button>
                        </Modal.Footer>
                    </Modal>
                    
                
                
            </Card.Body>
            </Card>
        </Col>
    );
};

export default Course;