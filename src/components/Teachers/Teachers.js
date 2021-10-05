import React, { useEffect, useState } from 'react';
import useTeachers from '../hooks/useTeachers';
import Teacher from '../Teacher/Teacher';
import './Teachers.css'
const Teachers = () => {
    const [teachers]  = useTeachers();
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