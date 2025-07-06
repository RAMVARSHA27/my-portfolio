import React from 'react';
import './About.css';
import theme_pattern from '../../assets/theme_pattern.svg';
import profile_img from '../../assets/my_profile.jpeg';

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
            <p>I'm a dedicated Fullstack Developer and Java Programmer with a passion for crafting end-to-end web solutions that are both functional and visually engaging.</p>
          </div>

          <div className='about-skills'>
            <div className="about-skill">
              <p>HTML, CSS & JS</p>
              <div className="skill-bar-wrapper">
                <hr style={{ width: "70%" }} />
                <span className="skill-percent">70%</span>
              </div>
            </div>

            <div className="about-skill">
              <p>React JS</p>
              <div className="skill-bar-wrapper">
                <hr style={{ width: "55%" }} />
                <span className="skill-percent">55%</span>
              </div>
            </div>

            <div className="about-skill">
              <p>Node JS</p>
              <div className="skill-bar-wrapper">
                <hr style={{ width: "50%" }} />
                <span className="skill-percent">50%</span>
              </div>
            </div>

            <div className="about-skill">
              <p>C, Python</p>
              <div className="skill-bar-wrapper">
                <hr style={{ width: "60%" }} />
                <span className="skill-percent">60%</span>
              </div>
            </div>

            <div className="about-skill">
              <p>Java</p>
              <div className="skill-bar-wrapper">
                <hr style={{ width: "70%" }} />
                <span className="skill-percent">70%</span>
              </div>
            </div>

            <div className="about-skill">
              <p>MySQL</p>
              <div className="skill-bar-wrapper">
                <hr style={{ width: "70%" }} />
                <span className="skill-percent">70%</span>
              </div>
            </div>
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
        <hr />
        <div className="about-achievement">
          <h1>1</h1>
          <p>CLIENT PROJECT COMPLETED</p>
        </div>
      </div>
    </div>
  );
};
