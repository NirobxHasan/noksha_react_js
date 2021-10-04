import React from 'react';
import { Col, Row } from 'react-bootstrap';
import './About.css'
import welcomeimg from '../../images/welcome.svg'
const About = () => {
    return (
        <div className='about mb-5'>
           <h1 className='fw-bold'>About</h1> 
           

               <Row xs={1} sm={1} md={1} lg={2} className="m-3">
                   <Col className='p-3 '>
                    <div>
                        <h6 className='text-color-red'>Our Story</h6>
                        <h1>Our Mission is to Provide a World‑class Education.</h1>
                        <p>Online courses designed for creatives and made for everyone. Take a course on Code, Design or Project</p>
                   </div>
                   </Col>
                   <Col className="">
                    <iframe className='video' width="95%" height="300"
                        src="https://www.youtube.com/embed/xXw7wOuABUg">
                        </iframe>
                   </Col>
               </Row>

               <div className='mt-5'>
                <Row xs={1} sm={1} md={1} lg={2} className="m-3">
                <Col className="">
                        <img className='p-2' width="90%" src={welcomeimg } alt="" />
                    </Col>
                    <Col className='p-3 '>
                        <div>
                            <h3 className='text-color-red'>Welcome to NOKSHA</h3>
                        
                            <p style={{fontSize:'14px'}}>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. <br /> <br />
                            Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem corporis suscipit laboriosam nisi ut aliquid ex ea commodi consequatur?</p>
                    </div>
                    </Col>
                    
                </Row>
               </div>

        
        </div>
    );
};

export default About;