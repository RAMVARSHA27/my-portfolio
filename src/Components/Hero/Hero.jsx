import React from 'react'
import './Hero.css'
import profile_img from '../../assets/profile_img.jpeg'
import AnchorLink from 'react-anchor-link-smooth-scroll';

export const Hero = () => {
  return (
    <div id='home' className='hero'>
      <img src={profile_img} alt="profile" />
      <h1>
        <span>I'm Ramvarsha,</span> a frontend developer and Java coder who loves clean and creative web design.
      </h1>
      <p>Crafting seamless digital experiences where clean code meets captivating design.</p>

      <div className="hero-action">
        <div className="hero-connect">
          <AnchorLink className='anchor-link' offset={50} href='#contact'>
            Connect With Me
          </AnchorLink>
        </div>

        <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
          <button className="hero-resume">My Resume</button>
        </a>
      </div>
    </div>
  );
};
