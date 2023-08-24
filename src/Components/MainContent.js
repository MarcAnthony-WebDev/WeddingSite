import React, { useState } from 'react';
import img1 from '../Images/SitePhotos/IMG_7759.JPG';
import img2 from '../Images/SitePhotos/IMG_7916.JPG';
import img3 from '../Images/SitePhotos/IMG_8215.JPG';
import bottomImg from '../Images/SitePhotos/IMG_8016.jpg';
import RsvpButton from './Button';
import Modal from './Modal';

import ParallaxIMG from './Parallax';

import styles from './MainContent.module.css';
import { Parallax } from 'react-parallax';

const MainContent = (props) => {
  // const weddingDate = new Date();
  // const now = new Date().toLocaleTimeString();
  // const [days, setDays] = useState(now);

  // const resetDays = () => {
  //   let newDay = new Date().toLocaleTimeString();
  //   setDays(newDay);
  // };

  return (
    <div className={styles['main-container']}>
      <h2>
        CELEBRATE WITH US! <br />
        <span>
          SATURDAY, JUNE 15, 2024 <br /> 677 South Ave, New Canaan, CT 06840
        </span>
      </h2>
      {/* <div className={styles['section-1']}> */}
      <div className={styles['img-container1']}>
        <img
          className={styles['section-img']}
          src={img1}
          alt='Marc and Marissa'
        />
      </div>
      <div className={styles['text-container1']}>
        <h3>Arrival</h3>
        <p>FRIDAY, JUNE 15, 2024 5:00 PM </p>
        <hr />
        <p>Refreshments served</p>
        <hr />
        <p>Ceremony to promptly start at 5:30 PM</p>
      </div>
      {/* </div> */}

      {/* <div className='section-2'> */}
      <div className={styles['img-container2']}>
        <img
          className={styles['section-img']}
          src={img2}
          alt='Marc and Marissa'
        />
      </div>
      <div className={styles['text-container2']}>
        <h3>Reception</h3>
        <p>
          Immediately following the ceremony the reception will be held on site
          in the Waveny House Estate
        </p>
      </div>
      <div className={styles.imgContainer3}>
        <ParallaxIMG height={'90vh'} strength={200} img={bottomImg} />
      </div>

      {/* </div> */}
      {/* <div className='section-3'> */}
      {/* <div className={styles['img-container3']}>
        <img
          className={styles['section-img']}
          src={img3}
          alt='Marc and Marissa'
        />
      </div>
      <div className={styles['text-container3']}>
        <h3>Reception</h3>
        <p>Reception to follow immediately after</p>
      </div> */}
      {/* </div> */}
    </div>
  );
};

export default MainContent;
