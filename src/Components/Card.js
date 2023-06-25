import React from 'react';
import Avatar from './Avatar';

const Card = (props) => {
  return (
    <div className='card'>
      <div className='top'>
        <Avatar img={props.img} />
        <h2>{props.name}</h2>
        <p>{props.role}</p>
        <p></p>
      </div>
      <div className='bottom'></div>
    </div>
  );
};

export default Card;
