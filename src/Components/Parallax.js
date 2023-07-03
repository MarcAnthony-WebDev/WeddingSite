import React from 'react';
import { Parallax } from 'react-parallax';
import img from '../Images/SitePhotos/IMG_8185.JPG';
import NavBar from './NavBar';
import '../Styles/App.css';

const ParallaxIMG = (props) => {
  return (
    <Parallax
      style={{
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        height: props.height,
        objectFit: 'contain',
        zIndex: '-1',
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
