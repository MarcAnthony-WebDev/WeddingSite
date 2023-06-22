import React from 'react';
import { Parallax } from 'react-parallax';
import img from '../Images/SitePhotos/IMG_8185.JPG';
import NavBar from './NavBar';
import '../Styles/App.css';

const ParallaxIMG = () => {
  return (
    <Parallax
      style={{
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
      }}
      strength={200}
      bgImageSize={'30%'}
      bgImage={img}
      bgImageAlt='picture of couple'
    >
      <div className='header'>
        {/* <NavBar /> */}
        <div className='text-content'>Marcanthony & Marissa</div>
      </div>
    </Parallax>
  );
};

export default ParallaxIMG;
