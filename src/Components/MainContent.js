import React from 'react';
import img1 from '../Images/SitePhotos/IMG_7759.JPG';
import img2 from '../Images/SitePhotos/IMG_7916.JPG';

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
          <p>Saturday, JUNE 15, 2024 4:00 PM </p>
          <hr />
          <p>Refreshments served</p>
          <hr />
          <p>Ceremony to promptly start at 4:30 PM</p>
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
            Right after the ceremony, we're hosting the reception at Waveny
            House Estate. It's the same location, so there's no need to travel.
            We'll be continuing the celebration with good food, music, and lots
            of fun as we start this exciting new chapter in our lives.
          </p>
        </div>
      </div>
      <div className={styles.imgContainer3Flex}>
        <div className={styles.imgContainer3Outer}>
          <div className={styles.imgContainer3Inner}>
            <a
              className={`${styles.mainBtn}`}
              href='https://withjoy.com/marissa-and-marcanthony/rsvp'
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
