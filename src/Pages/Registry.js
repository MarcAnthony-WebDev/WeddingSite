import React from 'react';
import NavBar from '../Components/NavBar';
import Footer from '../Components/Footer';
import ParallaxIMG from '../Components/Parallax';

import img from '../Images/SitePhotos/IMG_8215.JPG';
import styles from '../Styles/Registry.module.css';

const Registry = (props) => {
  return (
    <div className=''>
      <NavBar />
      <section className={styles.registryContainer}>
        <div className={styles.registryContent}>
          <p>
            Your presence is what matters most to us. If you're looking for gift
            ideas, the links below will direct you to our registries.
          </p>
          <a
            href='https://www.williams-sonoma.com/registry/vsdl55bkwj/registry-list.html'
            target='_blank'
            rel='noreferrer'
          >
            Target
          </a>
          <a
            href='https://www.williams-sonoma.com/registry/vsdl55bkwj/registry-list.html'
            target='_blank'
            rel='noreferrer'
          >
            William Sonoma
          </a>
          <a
            href='https://www.williams-sonoma.com/registry/vsdl55bkwj/registry-list.html'
            target='_blank'
            rel='noreferrer'
          >
            Amazon
          </a>
        </div>
      </section>
      {/* <ParallaxIMG
        strength={400}
        height={'80vh'}
        content={
          "You're presence is what matters most to us. If you're looking for gift ideas, the link below will direct you to our registry"
        }
        img={img}
      /> */}
      <Footer />
    </div>
  );
};

export default Registry;
