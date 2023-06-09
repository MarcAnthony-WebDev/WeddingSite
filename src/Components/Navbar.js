import React from 'react';
import { Link } from 'react-router-dom';
import styles from './navBar.module.css';

//PAGES

//classes
const logoClasses = `${styles['nav-link']} ${styles['logo']}`;
// const btnClasses = `${styles['btn']} ${styles['nav-link']}`;

const NavBar = (props) => {
  return (
    <nav className={styles['nav']}>
      <div className='nav-logo'>
        <Link className={logoClasses} to='/home'>
          LOGO
        </Link>
      </div>
      <div className='nav-link'>
        <ul className={styles['nav-list']}>
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
            <button className={styles['btn']} type='button'>
              RSVP
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
