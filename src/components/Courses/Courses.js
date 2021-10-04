import React, { useState, useEffect} from 'react';
import { Row } from 'react-bootstrap';
import Course from '../Course/Course';
import useCourses from '../hooks/useCourses';
import './Courses.css'

const Courses = () => {
    const [courses] = useCourses();
    return (
        <div className='courses'>
              <Row xs={1} md={2} className="m-4">
                    {
                        courses.map(course => <Course course={course} />)
                    }
                 
                </Row>
            
        </div>
    );
};

export default Courses;