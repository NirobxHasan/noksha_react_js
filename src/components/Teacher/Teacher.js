import React from 'react';
import './Teacher.css'
const Teacher = (props) => {
    const {name,age,company,email,img} = props.teacher;
    return (
        <div className="teacher-card">
            <div className='profile-image'>
                <img  src={img} alt="" />
            </div>
            <div className="name my-3">
                    <h4>{name}</h4>
                </div>
            <div className='teacher-info'>
                <p>Age: {age}</p>
                <h6 className="fw-bold">Designer</h6>
                <p> Company: {company}</p>
                <p>Email: {email}</p>
            </div>
           
        </div>
    );
};

export default Teacher;