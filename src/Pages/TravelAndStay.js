import React from 'react';
import ScrollToTop from '../Components/ScrollToTop';
import NavBar from '../Components/NavBar';
import Footer from '../Components/Footer';
import ParallaxIMG from '../Components/Parallax';
import img from '../Images/SitePhotos/IMG_8989.JPG';
import MediaCard from '../Components/HotelsCard';

import styles from '../Styles/TravelAndStay.module.css';

import imgMariott from '../Images/SitePhotos/MariottNorwalk.jpg';
import imgZeroDegrees from '../Images/SitePhotos/ZeroDegrees.jpg';
import imgEven from '../Images/SitePhotos/EvenHotel.jpg';

const TravelAndStay = (props) => {
  return (
    <div className={styles.travelContainer}>
      <NavBar />
      <ParallaxIMG
        position={'40% 60%'}
        content={'Travel & Stay'}
        strength={600}
        img={img}
        height='70vh'
      />
      <div className={styles.heading}>
        <h2>How to get there</h2>
        <p>
          Waveny House is convinently located just a few minutes away from
          downtown Stamford.{' '}
        </p>
      </div>
      <section className={styles.directions}>
        <div className={styles.directionsAddress}>
          <iframe
            src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d48134.25475456665!2d-73.57779534770054!3d41.06044683722201!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2a735e75899c5%3A0x590236784c3bfce9!2sWaveny%20House!5e0!3m2!1sen!2sus!4v1688588875537!5m2!1sen!2sus'
            width='400'
            title='Gps Location'
            height='450'
            style={{ border: '0' }}
            allowfullscreen=''
            loading='lazy'
            referrerpolicy='no-referrer-when-downgrade'
          ></iframe>
        </div>
        <div className={styles.directionsImage}>
          <div className={styles.directionsDetails}>
            <ul className={styles.directionsDetailsList}>
              <li className={styles.directionsDetailsItem}>
                Turn right into the park entrance and follow the road as it
                curves to the left.
              </li>
              <li className={styles.directionsDetailsItem}>
                Stay on the main road, passing by the tennis courts on your
                right.
              </li>
              <li className={styles.directionsDetailsItem}>
                Continue straight ahead, and you will soon see the majestic
                Waveny House on your right-hand side.
              </li>
              <li className={styles.directionsDetailsItem}>
                Parking is available near Waveny House. Look for designated
                parking areas or follow the signage for event parking.
              </li>
            </ul>
          </div>

          <img
            src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fs.hdnux.com%2Fphotos%2F01%2F11%2F20%2F50%2F19204630%2F5%2F1200x0.jpg&f=1&nofb=1&ipt=a4bbea974e0a307f43755df3d14c9caef22faf2d8ec0d7cda291f7834d8853e4&ipo=images'
            alt='Waveny House'
          />
        </div>
      </section>
      <div className={styles.heading}>
        <h2>Where to Stay</h2>
      </div>
      <section className={styles.hotels}>
        <div className={styles.hotelsDetails}>
          <MediaCard
            title='Marriott Courtyard Norwalk (Room Block)'
            description='This is our primary hotel for our wedding guests where we have rooms blocked off at reduced rates. This is also where the bride and groom will be staying as well as where the after party will be located.'
            image={imgMariott}
            link='https://www.marriott.com/event-reservations/reservation-link.mi?id=1696433261255&key=GRP&app=resvlink'
          />
        </div>
        <div className='hotelsDetails'>
          <MediaCard
            title='Hotel Zero Degrees Norwalk'
            description='Hotel Zero Degrees is a chic boutique hotel located in Norwalk, Connecticut. The hotel is a mere 10 minutes from the venue and, by the time of our wedding, the hotel will be newly renovated.'
            image={imgZeroDegrees}
            link='https://hotelzerodegrees.com/hotels/norwalk/'
          />
        </div>
        <div className='hotelsDetails'>
          <MediaCard
            title='Even Hotel Norwalk'
            description="Even Hotel Norwalk is a health and wellness-focused hotel. With its innovative fitness amenities, it's the perfect choice for guests who prioritize their well-being while traveling."
            image={imgEven}
            link='https://www.ihg.com/evenhotels/hotels/us/en/norwalk/orqev/hoteldetail'
          />
        </div>
      </section>
      <div className={styles.heading}>
        <h2>What To Do?</h2>
      </div>
      <section className={styles.todo}>
        <div>
          <img
            className={styles.todoImage}
            src='https://s.hdnux.com/photos/01/31/64/35/23545702/3/1200x0.jpg'
            alt=''
          />
        </div>
        <div className={styles.todoDetails}>
          <p>
            There are many things to do while in New Cannan. Since Waveny House
            is located just 10 minutes away from downtown Stamford you can find
            a bundle of things to do.
          </p>
          <p>
            Bars and Restaurants: Downtown Stamford boasts a vibrant nightlife
            scene with an array of bars, pubs, and restaurants. There's a wide
            variety of cuisines on offer from upscale dining to casual eateries
            Enjoy a night out with friends or family.
          </p>
          <p>
            Columbus Park: Take a leisurely stroll through Columbus Park, a
            charming park in the heart of downtown. With beautiful landscaping,
            benches, and a fountain, it's a great spot to relax and enjoy some
            fresh air.
          </p>
        </div>
      </section>
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default TravelAndStay;
