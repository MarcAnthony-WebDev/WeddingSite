import React from 'react';
import NavBar from '../Components/NavBar';
import Footer from '../Components/Footer';
import styles from '../Styles/WeddingParty.module.css';
import contacts from '../weddingPartyContacts';
import Avatar from '../Components/Avatar';
import Card from '../Components/Card';
import ParallaxIMG from '../Components/Parallax';
import img from '../Images/SitePhotos/IMG_8016.jpg';

const WeddingParty = (props) => {
  const createCard = (contact) => {
    return (
      <Card
        id={contact.id}
        key={contact.id}
        name={contact.name}
        role={contact.role}
        img={contact.imgURL}
      />
    );
  };

  return (
    <div className='contacts_main'>
      <NavBar />
      <ParallaxIMG
        content={'meet the wedding party'}
        strength={600}
        img={img}
        height={'60vh'}
      />

      <div className={styles['contacts_container']}>
        <p className={styles['contacts_heading']}>Meet the Wedding Party</p>
        {contacts.map(createCard)}
      </div>
      <Footer />
    </div>
  );
};

export default WeddingParty;
