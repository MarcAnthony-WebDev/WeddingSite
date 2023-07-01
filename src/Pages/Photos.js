import React from 'react';
import PhotoGallery from '../Components/PhotoGallery';
import NavBar from '../Components/NavBar';
import Footer from '../Components/Footer';

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

const photoAlbum = [
  {
    img: img1,
  },

  {
    img: img2,
  },
  {
    img: img3,
  },

  {
    img: img4,
  },

  {
    img: img5,
  },

  {
    img: img6,
  },

  {
    img: img7,
  },

  {
    img: img8,
  },

  {
    img: img9,
  },

  {
    img: img10,
  },

  {
    img: img11,
  },

  {
    img: img12,
  },

  {
    img: img13,
  },
];

const Photos = () => {
  return (
    <div className=''>
      <NavBar />
      <div className='photos_gallery'>
        <PhotoGallery photoAlbum={photoAlbum} />
      </div>
      <Footer />
    </div>
  );
};

export default Photos;
