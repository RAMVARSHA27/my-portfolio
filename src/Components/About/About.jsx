import React from 'react';
import './About.css';
import theme_pattern from '../../assets/theme_pattern.svg';
import profile_img from '../../assets/my_profile.jpeg';

export const About = () => {
  return (
    <div id='about' className='about'>
      <div className="about-title">
        <h1>About Me</h1>
        <img src={theme_pattern} alt="decor" />
      </div>

      <div className="about-section">
        <div className="about-left">
          <img src={profile_img} alt="profile" />
        </div>

        <div className="about-right">
          <div className="about-para">
            <p>
              I'm a dedicated Fullstack Developer and Java Programmer with a passion for crafting end-to-end web solutions that are both functional and visually engaging.
            </p>
          </div>

          <div className='about-skills'>
            {[['HTML, CSS & JS', 70], ['React JS', 55], ['Node JS', 50], ['C, Python', 60], ['Java', 70], ['MySQL', 70]].map(([skill, percent]) => (
              <div className="about-skill" key={skill}>
                <p>{skill}</p>
                <div className="skill-bar-wrapper">
                  <hr style={{ width: `${percent}%` }} />
                  <span className="skill-percent">{percent}%</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="about-achievements">
        <div className="about-achievement">
          <h1>150+</h1>
          <p>PROBLEMS SOLVED</p>
        </div>

        <div className="vertical-line"></div>

        <div className="about-achievement">
          <h1>3+</h1>
          <p>PROJECTS COMPLETED</p>
        </div>

        <div className="vertical-line"></div>

        <div className="about-achievement">
          <h1>1</h1>
          <p>CLIENT PROJECT COMPLETED</p>
        </div>
      </div>
    </div>
  );
};
