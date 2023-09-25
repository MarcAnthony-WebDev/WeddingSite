import React, { useState } from 'react';
import styles from './PhotoGallery.module.css';

import { ChevronLeft, ChevronRight, Close } from '@mui/icons-material';

const PhotoGallery = ({ photoAlbum }) => {
  const [slideNumber, setSlideNumber] = useState(0);
  const [openModal, setOpenModal] = useState(false);

  const handleOpenModal = (index) => {
    setSlideNumber(index);
    setOpenModal(true);
  };

  //close modal
  const handleCloseModal = () => {
    setOpenModal(false);
  };

  //Previous Image
  const prevSlide = () => {
    slideNumber === 0
      ? setSlideNumber(photoAlbum.length - 1)
      : setSlideNumber(slideNumber - 1);
  };

  //Next Image
  const nextSlide = () => {
    slideNumber + 1 === photoAlbum.length
      ? setSlideNumber(0)
      : setSlideNumber(slideNumber + 1);
  };

  return (
    <div className=''>
      {openModal && (
        <div className={styles['sliderWrap']}>
          <ChevronLeft
            sx={{ fontSize: '5rem' }}
            className={styles['btnPrev']}
            onClick={prevSlide}
          />
          <ChevronRight
            sx={{ fontSize: '5rem' }}
            className={styles['btnNext']}
            onClick={nextSlide}
          />
          <Close
            sx={{ fontSize: '5rem' }}
            className={styles['btnClose']}
            onClick={handleCloseModal}
          />
          <div className={styles['fullScreenImage']}>
            <img src={photoAlbum[slideNumber].img} alt='' />
          </div>
        </div>
      )}

      <div>
        <div className={styles['galleryWrap']}>
          <p className={styles.heading}>Photo Gallery</p>
          {photoAlbum &&
            photoAlbum.map((slide, index) => {
              return (
                <div
                  className={
                    photoAlbum[index].doubleHeight === true
                      ? `${styles.single} ${styles.doubleHeight}`
                      : `${styles.single}`
                  }
                  key={index}
                  onClick={() => handleOpenModal(index)}
                >
                  <img
                    // style={
                    //   photoAlbum[index].doubleHeight === true
                    //     ? { objectFit: 'contain' }
                    //     : { objectFit: 'cover' }
                    // }
                    src={slide.img}
                    alt=''
                  />
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default PhotoGallery;
