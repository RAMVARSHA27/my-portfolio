import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import profile_img from '../../assets/my_profile.jpeg'

export const About = () => {
  return (
    <div id='about' className='about'>
      <div className="about-title">
        <h1>About Me</h1>
        <img src={theme_pattern} alt="" />
      </div>

      <div className="about-section">
        <div className="about-left">
          <img src={profile_img} alt="" />
        </div>

        <div className="about-right">
          <div className="about-para">
            <p>I'm a passionate frontend developer who turns ideas into clean, responsive, and beautiful web experiences.</p>
            <p>Frontend development is my passion—I love bringing designs to life with clean and interactive code.</p>
          </div>
            <div className='about-skills'>
                <div className="about-skill"><p>HTML, CSS & JS</p><hr style={{width:"70%"}} /></div>
                <div className="about-skill"><p>React</p><hr style={{width:"50%"}} /></div>
                <div className="about-skill"><p>JavaScript</p><hr style={{width:"55%"}} /></div>
                <div className="about-skill"><p>Figma</p><hr style={{width:"65%"}} /></div>
                <div className="about-skill"><p>C, Pyhton</p><hr style={{width:"50%"}} /></div>
                <div className="about-skill"><p>Java</p><hr style={{width:"70%"}} /></div>
                <div className="about-skill"><p>MySQL</p><hr style={{width:"70%"}} /></div>
            </div>
        </div>
      </div>
    
      <div className="about-achievements">
        <div className="about-achievement">
          <h1>150+</h1>
          <p>PROBLEMS SOLVED</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>3+</h1>
          <p>PROJECTS COMPLETED</p>
        </div>
        <hr/>
        <div className="about-achievement">
            <h1>70%</h1>
            <p>UI/UX DESIGN RATING</p>
        </div>
      </div>
    </div>
  );
}
