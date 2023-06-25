import React from 'react';

import styles from './Button.module.css';
// import Button from '@mui/material/Button';

const RsvpButton = (props) => {
  //   const btnClasses = {
  //     color: 'white',
  //     fontFamily: 'Lato',
  //     background: 'transparent',
  //     borederRadius: '4px',
  //     fontSize: '2rem',
  //     cursor: 'pointer',
  //   };

  return (
    <div>
      {/* <Button
        classes={btnClasses}
        color='secondary'
        size={props.size}
        variant='outlined'
      >
        RSVP
      </Button> */}
      <button className={styles['btn']} type='button'>
        RSVP
      </button>
    </div>
  );
};

export default RsvpButton;
