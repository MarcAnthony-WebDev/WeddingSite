import React from 'react';
import NavBar from '../Components/NavBar';
import Footer from '../Components/Footer';
import styles from '../Styles/WeddingParty.module.css';
import contacts from '../weddingPartyContacts';
import Avatar from '../Components/Avatar';
import Card from '../Components/Card';

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
    <div className=''>
      <NavBar />

      <div className={styles['contacts_container']}>
        {contacts.map(createCard)}
      </div>
      <Footer />
    </div>
  );
};

export default WeddingParty;
