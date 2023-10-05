import React from 'react';
import img1 from '../Images/SitePhotos/IMG_7759.JPG';
import img2 from '../Images/SitePhotos/IMG_7916.JPG';

import bottomImg from '../Images/SitePhotos/IMG_8016.jpg';

import RsvpButton from './Button';
// import { Parallax } from 'react-parallax';

import ParallaxIMG from './Parallax';

import styles from './MainContent.module.css';

const MainContent = (props) => {
  return (
    <>
      <div className={styles['main-container']}>
        <h2>
          CELEBRATE WITH US! <br />
          <span>
            SATURDAY, JUNE 15, 2024 <br /> 677 South Ave, New Canaan, CT 06840
          </span>
        </h2>
        <div className={`${styles['img-container1Outer']} ${styles['imgBox']}`}>
          <div className={`${styles['img-container1Inner']}`}>
            <img
              className={styles['section-img']}
              src={img1}
              alt='Marc and Marissa'
            />
          </div>
        </div>
        <div className={styles['text-container1']}>
          <h3>Arrival</h3>
          <p>FRIDAY, JUNE 15, 2024 5:00 PM </p>
          <hr />
          <p>Refreshments served</p>
          <hr />
          <p>Ceremony to promptly start at 5:30 PM</p>
        </div>

        <div className={`${styles['img-container2Outer']} ${styles['imgBox']}`}>
          <div className={styles['img-container2Inner']}>
            <img
              className={styles['section-img']}
              src={img2}
              alt='Marc and Marissa'
            />
          </div>
        </div>
        <div className={styles['text-container2']}>
          <h3>Reception</h3>
          <p>
            Immediately following the ceremony the reception will be held on
            site in the Waveny House Estate
          </p>
        </div>
      </div>
      <div className={styles.imgContainer3Flex}>
        <div className={styles.imgContainer3Outer}>
          <div className={styles.imgContainer3Inner}>
            <a
              className={`${styles.mainBtn}`}
              href='https://www.theknot.com/us/marissa-simone-and-marcanthony-tumminello-jun-2024/rsvp'
              target='_blank'
              rel='noreferrer'
            >
              Click here to RSVP!!!
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainContent;
