import React, { useRef, useState, useEffect } from 'react';
import './Navbar.css';
import logo from '../../assets/logo.svg';
import underline from '../../assets/nav_underline.svg';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import menu_open from '../../assets/menu_open.svg';
import menu_close from '../../assets/menu_close.svg';

export const Navbar = () => {
  const [menu, setMenu] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [isAtHome, setIsAtHome] = useState(true);

  const menuRef = useRef();

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false);
        menuRef.current.style.right = "-100vw";
      }
    };

    const handleScroll = () => {
      const homeSection = document.getElementById("home");
      if (homeSection) {
        const rect = homeSection.getBoundingClientRect();
        setIsAtHome(rect.top <= 100 && rect.bottom >= 100);
      }
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // ✅ Track section in view using IntersectionObserver
  useEffect(() => {
    const sections = ['home', 'about', 'work', 'contact'];
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setMenu(entry.target.id);
          }
        });
      },
      { threshold: 0.6 }
    );

    sections.forEach(id => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });

    return () => {
      sections.forEach(id => {
        const section = document.getElementById(id);
        if (section) observer.unobserve(section);
      });
    };
  }, []);

  const openMenu = () => {
    menuRef.current.style.right = "0";
    setIsMenuOpen(true);
  };

  const closeMenu = () => {
    menuRef.current.style.right = "-100vw";
    setIsMenuOpen(false);
  };

  return (
    <div className='navbar'>
      {isMobile && isAtHome && !isMenuOpen && (
        <img src={menu_open} onClick={openMenu} alt="open" className='nav-mob-open' />
      )}

      <ul className={`nav-menu ${isMobile ? 'mobile' : ''}`} ref={menuRef}>
        {isMobile && isMenuOpen && (
          <img src={menu_close} onClick={closeMenu} alt="close" className='nav-mob-close' />
        )}

        {['home', 'about', 'work', 'contact'].map((item) => (
          <li key={item}>
            <AnchorLink
              className='anchor-link'
              offset={item === 'home' ? -130 : 50}
              href={`#${item}`}
            >
              <p onClick={() => { setMenu(item); if (isMobile) closeMenu(); }}>
                {item === 'home' ? 'Home' :
                 item === 'about' ? 'About Me' :
                 item === 'work' ? 'Projects' : 'Contact'}
              </p>
            </AnchorLink>
            {menu === item && <img src={underline} alt="underline" />}
          </li>
        ))}
      </ul>
    </div>
  );
};
