import React from 'react';
import NavBar from '../Components/NavBar';
import Footer from '../Components/Footer';
import ParallaxIMG from '../Components/Parallax';
import img from '../Images/PhotosPage/IMG_7763.JPG';
import styles from '../Styles/OurStory.module.css';
import sideBarImg from '../Images/sideBarImage.png';
import { Link } from 'react-router-dom';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

import img1 from '../Images/OurStoryPhotos/IMG_9501.JPG';
import img2 from '../Images/OurStoryPhotos/IMG_9502.JPG';
import img3 from '../Images/OurStoryPhotos/IMG_9503.jpg';
import img4 from '../Images/OurStoryPhotos/IMG_9504.jpg';
import img5 from '../Images/OurStoryPhotos/IMG_9505.jpg';
// import img6 from '../Images/OurStoryPhotos/IMG_9506.jpg';
// import img7 from '../Images/OurStoryPhotos/IMG_9507.jpg';
import img8 from '../Images/SitePhotos/IMG_9904.JPG';
import img9 from '../Images/SitePhotos/IMG_9905.jpg';
import img10 from '../Images/SitePhotos/IMG_9903.jpg';

const OurStory = (props) => {
  return (
    <div className={styles.storyContainer}>
      <NavBar />
      <ParallaxIMG
        position={'80% 100%'}
        strength={600}
        height={'70vh'}
        content={'Our Story'}
        img={img}
      />
      <main>
        <div className={`${styles.sidebarImage} ${styles.sidebarImageLeft}`}>
          <img className={styles.sidebarImg} src={sideBarImg} alt='sidebar' />
        </div>

        <div className={`${styles.storyContent} ${styles.storyContentTop}`}>
          <h2>How we met</h2>
          <p>
            Marissa and I met through mutual friends while out one night at the
            Inn at Long Beach. Naturaly, my proficient skills in breakdancing
            culled her in my direction. "I wanna see what you got", she said to
            me. We proceeded to dance the night away with intermediate moments
            of myself hopping on stage to sing Red Hot Chili Peppers with the
            talent that night.
          </p>
          <p>
            Later that evening, I said to her, "If I don't get your number, I
            will regret it for the rest of my life." Sure enough, a few days
            later, I took Marissa on our first date, ice skating in Rockafeller
            center.
          </p>
        </div>
        <div className={styles.storyImagesContainer}>
          <img
            className={`${styles.img1} ${styles.storyImageSingle}`}
            src={img1}
            alt='early-realationship'
          />
          <img
            className={`${styles.img2} ${styles.storyImageSingle}`}
            src={img2}
            alt='early-realationship'
          />
          <img
            className={`${styles.img3} ${styles.storyImageSingle}`}
            src={img3}
            alt='early-realationship'
          />
          <img
            className={`${styles.img4} ${styles.storyImageSingle}`}
            src={img4}
            alt='early-realationship'
          />
          <img
            className={`${styles.img5} ${styles.storyImageSingle}`}
            src={img5}
            alt='early-realationship'
          />
        </div>
        <div className={`${styles.sidebarImage} ${styles.sidebarImageRight}`}>
          <img className={styles.sidebarImg} src={sideBarImg} alt='sidebar' />
        </div>
        <div className={`${styles.storyContent} ${styles.storyContentBottom}`}>
          <h2>Happily Ever After</h2>
          <p>
            7 years later, after visiting numerous countries, enduring the the
            likes of a pandemic, and battling every thing that might stand in
            our way, I graciously proposed to the love of my life in Las Vegas
            in June of 2022 amongst family.
          </p>
          <p></p>
        </div>
        <div className={styles.storyImagesBottom}>
          <img
            className={`${styles.storyImageSingleBottom} ${styles.img8}`}
            src={img8}
            alt=''
          />
          <img
            className={`${styles.storyImageSingleBottom} ${styles.img9}`}
            src={img9}
            alt=''
          />
          <img
            className={`${styles.storyImageSingleBottom} ${styles.img10}`}
            src={img10}
            alt=''
          />
        </div>

        <Link className={styles.storyBtnLink} to='/Photos'>
          WANT TO SEE MORE PHOTOS? <ArrowRightAltIcon fontSize='large' />
        </Link>
      </main>

      <Footer />
    </div>
  );
};

export default OurStory;
