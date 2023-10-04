import React from 'react';
import ScrollToTop from '../Components/ScrollToTop';

import ParallaxIMG from '../Components/Parallax';
import NavBar from '../Components/NavBar';
import Footer from '../Components/Footer';

import styles from '../Styles/RSVP.module.css';

import img from '../Images/OurStoryPhotos/IMG_9506.jpg';

const RSVP = () => {
  return (
    <div className=''>
      <NavBar />
      <ParallaxIMG
        strength={200}
        height={'70rem'}
        styles={{ justifyContent: 'flex-end' }}
        content={'RSVP'}
        img={img}
      />
      <div className={styles.formContainer}>
        <form className={styles.form}>
          <label htmlFor='name'>Enter full name:</label>
          <input type='text' id='name' placeholder='Name' />

          <label htmlFor='plusOne'>Enter your email:</label>
          <input type='text' id='email' placeholder='Email' />

          <div className={styles.radioBtns}>
            <input type='radio' id='yes' value='yes' />
            <label htmlFor='yes'>Yes</label>
            <input type='radio' id='no' value='no' />
            <label htmlFor='no'>No</label>
          </div>
        </form>
      </div>
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default RSVP;
