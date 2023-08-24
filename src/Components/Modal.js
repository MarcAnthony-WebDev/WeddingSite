import React, { useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';

import styles from './Modal.module.css';

const Modal = ({ closeModal }) => {
  return (
    <div className={styles.modalBackground}>
      <div className={styles.modalContainer}>
        <form className={styles.form}>
          <button
            className={styles.closeModalBtn}
            onClick={() => {
              closeModal(false);
            }}
          >
            <CloseIcon></CloseIcon>
          </button>
          <label htmlFor='name'>Enter full name:</label>
          <input type='text' id='name' value='name' />
          <label htmlFor='plusOne'>Plus ones name</label>
          <input type='text' id='plusOne' value='name' />
        </form>
      </div>
    </div>
  );
};

export default Modal;
