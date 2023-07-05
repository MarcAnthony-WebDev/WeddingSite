import React from 'react';
import NavBar from '../Components/NavBar';
import Footer from '../Components/Footer';
import ParallaxIMG from '../Components/Parallax';
import img from '../Images/PhotosPage/IMG_7763.JPG';
import styles from '../Styles/OurStory.module.css';

const OurStory = (props) => {
  return (
    <div className='container'>
      <NavBar />
      <ParallaxIMG strength={200} content={'Our Story'} img={img} />

      <Footer />
    </div>
  );
};

export default OurStory;
