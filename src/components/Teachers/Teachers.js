import React, { useEffect, useState } from 'react';
import Teacher from '../Teacher/Teacher';
import './Teachers.css'
const Teachers = () => {
    const [teachers, setTeachers] =useState([]);


    //call json file and set to the state.
    useEffect(()=>{
        fetch('./teachers.JSON')
        .then(res=>res.json())
        .then(data=> setTeachers(data))
    },[])
    return (
        <div className='teacher-container'>

            <div className="teacher-section">
                {
                    teachers.map(teacher => <Teacher teacher={teacher}/>)
                }
            </div>
            
        </div>
    );
};

export default Teachers;