import React from 'react';
import Avatar from './Avatar';

import styles from './Card.module.css';

const Card = (props) => {
  return (
    <div className={styles['card']}>
      <div className={styles['top']}>
        <Avatar img={props.img} />
        <hr />
        <h3>{props.name}</h3>
        <p className={styles['role']}>{props.role}</p>
        <p className={styles['intro']}>{props.intro}</p>
      </div>
      {/* <div className='bottom'></div> */}
    </div>
  );
};

export default Card;
