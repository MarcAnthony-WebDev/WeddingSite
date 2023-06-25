import React from 'react';
import styles from './Avatar.module.css';

const Avatar = (props) => {
  return (
    <img src={props.img} alt='avatar_image' className={styles['circle-img']} />
  );
};

export default Avatar;
