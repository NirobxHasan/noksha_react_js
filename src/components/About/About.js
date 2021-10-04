import React from 'react';
import './About.css'
const About = () => {
    return (
        <div className='about'>
           <h1 className='fw-bold'>About</h1> 
           <div className='m-4 d-flex  align-items-center'>
               <div className=''>
                   <h6 className='text-color-red'>Our Story</h6>
                   <h1>Our Mission is to Provide a World‑class Education.</h1>
                   <p>Online courses designed for creatives and made for everyone. Take a course on Code, Design or Project</p>
               </div>
               <div >
               <iframe className='video' width="420" height="315"
                    src="https://www.youtube.com/embed/xXw7wOuABUg">
                    </iframe>
               </div>

           </div>
        </div>
    );
};

export default About;