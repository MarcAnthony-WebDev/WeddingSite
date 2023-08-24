import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import styles from './Button.module.css';
import Modal from './Modal';

const RsvpButton = (props) => {
  return (
    <div>
      <button
        // style={openModal ? { display: 'block' } : { display: 'none' }}
        className={styles['btn']}
        type='button'
      >
        <a
          className={styles.link}
          href='https://www.theknot.com/us/marissa-simone-and-marcanthony-tumminello-jun-2024/rsvp'
          target='_blank'
          rel='noreferrer'
        >
          RSVP
        </a>
      </button>
    </div>
  );
};

export default RsvpButton;
