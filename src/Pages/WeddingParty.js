import React from 'react';
import ScrollToTop from '../Components/ScrollToTop';
import NavBar from '../Components/NavBar';
import Footer from '../Components/Footer';
import styles from '../Styles/WeddingParty.module.css';
import contacts from '../weddingPartyContacts';
// import Avatar from '../Components/Avatar';
import Card from '../Components/Card';
// import ParallaxIMG from '../Components/Parallax';

const WeddingParty = (props) => {
  const createCard = (contact) => {
    return (
      <Card
        id={contact.id}
        key={contact.id}
        name={contact.name}
        role={contact.role}
        img={contact.imgURL}
        intro={contact.intro}
      />
    );
  };

  return (
    <div className='contacts_main'>
      <NavBar />

      <header className={styles.headerImg}>
        <h2>Meet the Wedding Party!</h2>
      </header>

      <div className={styles['contacts_container']}>
        {contacts.map(createCard)}
        <div className={styles['contacts_bottom']}>
          <p>A special thank you to the flower girls and ring bearers:</p>
          <p>
            Gemma Tumminello, Giovanna Clark, Lorenzo Tumminello and Nicholas
            Santos.
          </p>
        </div>
      </div>

      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default WeddingParty;
