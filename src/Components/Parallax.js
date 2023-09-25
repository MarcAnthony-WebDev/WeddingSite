import React from 'react';
import { Parallax } from 'react-parallax';

import '../Styles/App.css';

const ParallaxIMG = (props) => {
  return (
    <Parallax
      bgImageSize='cover'
      style={{
        // backgroundSize: 'cover',
        // backgroundRepeat: 'no-repeat',
        height: props.height,
        zIndex: '-1',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
      bgImageStyle={{
        height: '100vh',
        width: '100vw',
        objectFit: 'cover',
        objectPosition: props.position,
        // backgroundSize: 'cover',
        // backgroundRepeat: 'no-repeat',
        backgroundPosition: 'left',
        backgroundAttachment: 'fixed',
      }}
      bgStyle={{
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'left',
        backgroundAttachment: 'fixed',
      }}
      strength={props.strength}
      bgImage={props.img}
    >
      <div className='header'>
        {/* <NavBar /> */}
        <div style={props.styles} className='text-content'>
          {props.content}
        </div>
      </div>
    </Parallax>
  );
};

export default ParallaxIMG;
