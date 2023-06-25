import React from 'react';
import { Link } from 'react-router-dom';

import styles from './Footer.module.css';

const Footer = () => {
  return (
    <div className={styles['footer-container']}>
      <footer className={styles['footer']}>
        <nav className={styles['footer_nav']}>
          <ul className={styles['footer_list']}>
            <li className={styles['footer_item']}>
              <Link className={styles['footer_link']} to='/OurStory'>
                OUR STORY
              </Link>
            </li>
            <li className={styles['footer_item']}>
              <Link className={styles['footer_link']} to='/TravelAndStay'>
                TRAVEL & STAY
              </Link>
            </li>
            <li className={styles['footer_item']}>
              <Link className={styles['footer_link']} to='/Registry'>
                REGISTRY
              </Link>
            </li>
            <li className={styles['footer_item']}>
              <Link className={styles['footer_link']} to='/Photos'>
                PHOTOS
              </Link>
            </li>
            <li className={styles['footer_item']}>
              <Link className={styles['footer_link']} to='/WeddingParty'>
                WEDDING PARTY
              </Link>
            </li>
            <li className={styles['footer_item']}>
              <Link className={styles['footer_link']} to='/QAndA'>
                Q&A
              </Link>
            </li>
          </ul>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
