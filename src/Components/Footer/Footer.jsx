import React from 'react';
import './Footer.css';
import user_icon from '../../assets/user_icon.svg';

export const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-top">
        <div className="footer-top-left">
          <h2>RAMVARSHA R</h2>
          <p>Crafting seamless digital experiences where clean code meets captivating design.</p>
        </div>
      </div>

      <hr />

      <div className="footer-bottom">
        <p className="footer-bottom-left">© 2025 RAMVARSHA. All rights reserved.</p>
      </div>
    </div>
  );
};
