import React from 'react';
import Footer from '../Components/Footer';
import NavBar from '../Components/NavBar';
import ScrollToTop from '../Components/ScrollToTop';

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
            William Sonoma
          </a>
          <a
            href='https://www.crateandbarrel.com/gift-registry/marissa-simone-and-marcanthony-tumminello/r6848532'
            target='_blank'
            rel='noreferrer'
          >
            Crate&Barrel
          </a>
          <a
            href='https://www.target.com/gift-registry/gift/emmandemm'
            target='_blank'
            rel='noreferrer'
          >
            Target
          </a>
        </div>
      </section>
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Registry;
