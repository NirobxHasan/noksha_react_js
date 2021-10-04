import React, { useState, useEffect  } from 'react';
import { useParams } from 'react-router';
import useCourses from '../hooks/useCourses';
import './CourseDetails.css'
const CouseDetails = () => {
    

    const [courses, setCourses] = useCourses();
    console.log(courses[0]);
    
    const {courseID} =useParams();
    console.log(courseID);
    

       
  
     
        
 
    return (
        <div className='course-details'>
            <h1>Deails</h1>
        </div>
    );
};

export default CouseDetails;