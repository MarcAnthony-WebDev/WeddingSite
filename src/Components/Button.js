import React from 'react';
// import { Link } from 'react-router-dom';

import styles from './Button.module.css';

const RsvpButton = (props) => {
  return (
    <div>
      <button className={styles['btn']} type='button'>
        <a
          className={styles.link}
          href='https://withjoy.com/marissa-and-marcanthony/rsvp'
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
