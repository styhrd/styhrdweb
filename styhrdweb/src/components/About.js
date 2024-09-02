// src/components/About.js
import React from 'react';
import '../styles/about.scss'

const About = () => {
  return <>
    <div className='aboutpage'>

      <div className='quotecont'>


        <div className='piccont'>
          <img src='assets/me.jpg' className='mepic'></img>
          <div className='description'>
            <p>I am a fresh graduate from Mapua University with a degree in Information Technology. As an aspiring software developer, I am passionate about leveraging my knowledge and skills to create innovative solutions and contribute to the tech industry.</p>
          </div>
        </div>
      </div>


      <div className='abouthead'>
        <p>WHAT ARE MY SOFT SKILLS?</p>
      </div>

      <div className='description'>
        <p>My soft skills include strong <i><b>leadership</b></i>, allowing me to guide teams effectively. I consistently demonstrate <i><b>initiative</b></i>  by addressing challenges and driving improvements. With excellent <i><b>communication</b></i> skills, I can clearly articulate ideas and ensure everyone is aligned. My <i><b>critical thinking</b></i> enables me to analyze situations thoroughly and make informed decisions. I also excel in <i><b>time management</b></i>, prioritizing tasks to meet deadlines efficiently.</p>
      </div>

      <div className='abouthead'>
        <p>MY EXPERIENCE</p>
      </div>
      <div className='description'>
        <p>
          I have experience working as a freelance web developer, where I honed my skills in creating dynamic and user-friendly websites. Additionally, I completed an internship as a product developer at Bridge360 IT Solutions, where I contributed to developing innovative software solutions and gained valuable insights into the tech industry.
        </p>
      </div>


      <div className='abouthead2'>
        <p>LIFESTYLE</p>
      </div>

      <div className='lifecont'>
        <div className='lifepic'>
          <img src='assets/me2.jpg'></img>
        </div>

        <div>
          <p className='description '>
            I lead a fit lifestyle, enjoying activities like running, lifting weights, and having fun while staying active. The discipline and commitment I apply to my fitness routine carry over into my everyday life, helping me stay focused and motivated in all my endeavors. This balance of physical activity and enjoyment not only keeps me healthy but also enhances my overall well-being and productivity.
          </p>
        </div>


      </div>
      <div className='quotes'>
        <div className='quote'>
          <p>MENTAL TOUGHNESS IS A LIFESTYLE.</p>
        </div>
      </div>
    </div>
  </>;
};

export default About;
