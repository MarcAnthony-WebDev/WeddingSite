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
      }}
      strength={props.strength}
      bgImageSize={'30%'}
      bgImage={props.img}
      bgImageAlt='picture of couple'
    >
      <div className='header'>
        {/* <NavBar /> */}
        <div className='text-content'>{props.content}</div>
      </div>
    </Parallax>
  );
};

export default ParallaxIMG;
