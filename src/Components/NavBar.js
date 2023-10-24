import React, { useState, useEffect } from 'react';
import MediaQuery from 'react-responsive';
import { Link } from 'react-router-dom';

import styles from './NavBar.module.css';
import MenuIcon from '@mui/icons-material/Menu';
import img from '../Images/SitePhotos/M&M Logo.png';
import RsvpButton from './Button';

//classes
const logoClasses = ` ${styles['logo']}`;

//Component
const NavBar = (props) => {
  //STATE
  const [isActive, setIsActive] = useState(
    window.innerWidth > 850 ? true : false
  );
  const [width, setWidth] = useState(window.innerWidth);
  const [navColor, setNavColor] = useState(false);
  // const [height, setHeight] = useState(window.innerHeight);

  const updateWidth = () => {
    setWidth(window.innerWidth);
    if (width > 850) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  };

  useEffect(() => {
    window.addEventListener('resize', updateWidth);
    return () => window.removeEventListener('resize', updateWidth);
  });

  const changeColor = () => {
    if (window.scrollY >= 100) {
      setNavColor(true);
    } else {
      setNavColor(false);
    }
  };

  window.addEventListener('scroll', changeColor, true);

  //handlers
  const handleClick = (e) => {
    setIsActive(() => (isActive ? false : true));
    if (width > 100) {
      setNavColor(true);
    } else {
      setNavColor(!navColor);
    }
  };

  const styledImg = {
    height: '20px',
  };

  const styledHamburger = {
    fontSize: '4.5rem',
    position: 'absolute',
    top: '2.25rem',
    right: '1rem',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    cursor: 'pointer',
    fill: 'var(--main-secondary-color)',
    backgroundColor: 'var(--main-primary-color)',
    borderRadius: '1rem',
    boxShadow: '0 0 10px rgba(0,0,0,0.7)',

    transition: '.2s all',
  };

  return (
    <nav
      className={
        navColor ? `${styles.nav} ${styles.navActive}` : `${styles.nav}`
      }
    >
      <div className='nav-logo'>
        <Link className={logoClasses} to='/'>
          <img
            className={styledImg}
            style={{ height: '7.5rem' }}
            src={img}
            alt='M&M Logo'
          />
        </Link>
      </div>
      <div className='nav-container'>
        <ul
          style={{
            display: isActive ? 'flex' : 'none',
          }}
          className={styles['nav-list']}
        >
          <li className={styles['nav-item']}>
            <Link className={styles['nav-link']} to='/OurStory'>
              Our Story
            </Link>
          </li>
          <li className={styles['nav-item']}>
            <Link className={styles['nav-link']} to='/TravelAndStay'>
              Travel & Stay
            </Link>
          </li>
          <li className={styles['nav-item']}>
            <Link className={styles['nav-link']} to='/Registry'>
              Registry
            </Link>
          </li>
          <li className={styles['nav-item']}>
            <Link className={styles['nav-link']} to='/Photos'>
              Photos
            </Link>
          </li>
          <li className={styles['nav-item']}>
            <Link className={styles['nav-link']} to='/WeddingParty'>
              Wedding Party
            </Link>
          </li>
          <li className={styles['nav-item']}>
            <Link className={styles['nav-link']} to='/QAndA'>
              Q&A
            </Link>
          </li>
          <li>
            <RsvpButton size='large' />
          </li>
        </ul>
        <MediaQuery maxWidth={850}>
          <MenuIcon
            style={styledHamburger}
            className={styles['hamburger']}
            onClick={handleClick}
          />
        </MediaQuery>
      </div>
    </nav>
  );
};

export default NavBar;
