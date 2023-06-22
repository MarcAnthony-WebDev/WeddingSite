import React, { useState, useEffect } from 'react';
import MediaQuery from 'react-responsive';
import { Link } from 'react-router-dom';

import styles from './NavBar.module.css';
import MenuIcon from '@mui/icons-material/Menu';
import img from '../Images/SitePhotos/M&M Logo.png';

/* POTENTIAL COLORS?  
SAGE -> #C1D0B5
GOLD -> B08A50

*/

//classes
const logoClasses = ` ${styles['logo']}`;

const btnClasses = `${styles['btn']} ${styles['nav-link']}`;

const NavBar = (props) => {
  //STATE
  const [isActive, setIsActive] = useState(true);
  const [width, setWidth] = useState(window.innerWidth);
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

  //handlers
  const handleClick = (e) => {
    setIsActive(() => (isActive ? false : true));
  };

  const styledImg = {
    height: '20px',
  };

  const styledHamburger = {
    fontSize: '3.5rem',
    position: 'absolute',
    color: '#555',
    top: '0.75rem',
    right: '1rem',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    cursor: 'pointer',
  };

  return (
    <nav className={styles['nav']}>
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
            <button className={btnClasses} type='button'>
              RSVP
            </button>
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
