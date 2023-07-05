import React from 'react';
import PhotoGallery from '../Components/PhotoGallery';
import NavBar from '../Components/NavBar';
import Footer from '../Components/Footer';
import ParallaxIMG from '../Components/Parallax';

import img1 from '../Images/PhotosPage/IMG_7764.JPG';
import img2 from '../Images/PhotosPage/IMG_7810.JPG';
import img3 from '../Images/PhotosPage/IMG_7833.JPG';
import img4 from '../Images/PhotosPage/IMG_7885.JPG';
import img5 from '../Images/PhotosPage/IMG_7905.JPG';
import img6 from '../Images/PhotosPage/IMG_7943.JPG';
import img7 from '../Images/PhotosPage/IMG_7960.JPG';
import img8 from '../Images/PhotosPage/IMG_7978.JPG';
import img9 from '../Images/PhotosPage/IMG_7993.JPG';
import img10 from '../Images/PhotosPage/IMG_8029.JPG';
import img11 from '../Images/PhotosPage/IMG_8073.JPG';
import img12 from '../Images/PhotosPage/IMG_8145.JPG';
import img13 from '../Images/PhotosPage/IMG_8197.JPG';
import { Photo } from '@mui/icons-material';
import img14 from '../Images/SitePhotos/IMG_9901.jpg';
import img15 from '../Images/SitePhotos/IMG_9903.jpg';
import img16 from '../Images/SitePhotos/IMG_9904.JPG';

const photoAlbum = [
  {
    img: img1,
    doubleHeight: false,
  },

  {
    img: img2,
    doubleHeight: false,
  },
  {
    img: img10,
    doubleHeight: true,
  },

  {
    img: img4,
    doubleHeight: false,
  },

  {
    img: img13,
    doubleHeight: true,
  },

  {
    img: img6,
    doubleHeight: false,
  },

  {
    img: img14,
    doubleHeight: true,
  },
  {
    img: img7,
    doubleHeight: false,
  },

  {
    img: img8,
    doubleHeight: false,
  },

  {
    img: img9,
    doubleHeight: false,
  },

  {
    img: img3,
    doubleHeight: false,
  },

  {
    img: img11,
    doubleHeight: true,
  },

  {
    img: img12,
    doubleHeight: false,
  },

  {
    img: img5,
    doubleHeight: false,
  },

  {
    img: img15,
    doubleHeight: false,
  },

  {
    img: img16,
    doubleHeight: false,
  },
];

const Photos = () => {
  return (
    <div className=''>
      <NavBar />
      <ParallaxIMG strength={100} content={'Photo Gallery'} img={img5} />
      <div className='photos_gallery'>
        <PhotoGallery photoAlbum={photoAlbum} />
      </div>
      <Footer />
    </div>
  );
};

export default Photos;
