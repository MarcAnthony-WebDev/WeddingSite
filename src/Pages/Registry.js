import React from 'react';
import NavBar from '../Components/NavBar';
import Footer from '../Components/Footer';
import ParallaxIMG from '../Components/Parallax';

import img from '../Images/SitePhotos/IMG_8016.jpg';
import styles from '../Styles/Registry.module.css';

const Registry = (props) => {
  return (
    <div className=''>
      <NavBar />
      <section className={styles.registryContainer}>
        <div className={styles.registryContent}>
          <p>
            Your presence is what matters most to us. If you're looking for gift
            ideas, the link below will direct you to our registry
          </p>
          <a href='#'>Link to Registry</a>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Registry;
