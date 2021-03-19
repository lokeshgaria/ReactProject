import React from 'react';
 
import Common from '../Common.jsx'
import about from '../images/about.svg';
const About = () => {
  return (
    <>
    <Common name="welcome to about page of " btnName="contact us" linkto ="/contact" imgsrc={about} /> 
    </>
  )
}

export default About;