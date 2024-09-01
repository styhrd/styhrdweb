// src/components/About.js
import React from 'react';
import '../styles/about.scss'

const About = () => {
  return <>
    <div className='aboutpage'>

      <div className='quotecont'>
        <div className='quotes'>
          <div className='quote'>
            <p>Mental toughness</p>
            <p>is a</p>
            <p>lifestyle.</p>
          </div>
        </div>

        <div className='piccont'>
          <img src='assets/me.jpg' className='mepic'></img>
        </div>
      </div>
      <div className='description'>
        <p>I am a fresh graduate from Mapua University with a degree in Information Technology. As an aspiring software developer, I am passionate about leveraging my knowledge and skills to create innovative solutions and contribute to the tech industry.</p>
      </div>

      <div className='abouthead'>
        <p>WHAT ARE MY SOFT SKILLS?</p>
      </div>

      <div className='description'>
        <p>My soft skills include strong <i><b>leadership</b></i>, allowing me to guide teams effectively. I consistently demonstrate <i><b>initiative</b></i>  by addressing challenges and driving improvements. With excellent <i><b>communication</b></i> skills, I can clearly articulate ideas and ensure everyone is aligned. My <i><b>critical thinking</b></i> enables me to analyze situations thoroughly and make informed decisions. I also excel in <i><b>time management</b></i>, prioritizing tasks to meet deadlines efficiently.</p>
      </div>

      <div className='abouthead2'>
        <p>LIFESTYLE</p>
      </div>

    </div>
  </>;
};

export default About;
