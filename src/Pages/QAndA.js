import AddIcon from '@mui/icons-material/Add';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../Components/Footer';
import NavBar from '../Components/NavBar';
import ParallaxIMG from '../Components/Parallax';
import ScrollToTop from '../Components/ScrollToTop';
import styles from '../Styles/QAndA.module.css';

import img from '../Images/SitePhotos/IMG_7987.JPG';

const data = [
  {
    question: 'What time should I arrive at the ceremony?',
    answer:
      'All guests should arrive by 4:00 PM. Refreshments will be served and the ceremony will start promptly at 4:30 PM. Cocktail hour will immediately follow.',
  },
  {
    question: 'What is the dress code?',
    answer: 'Formal attire is requested for all guests.',
  },
  {
    question: 'When should I RSVP by?',
    answer: 'May 1st 2024',
  },
  {
    question: 'What is the best way to RSVP?',
    answer: (
      <Link
        to='https://withjoy.com/marissa-and-marcanthony/rsvp'
        className={styles['link']}
      >
        Click here to RSVP
      </Link>
    ),
  },
  {
    question:
      'Will the ceremony and cocktail hour take place indoors or outdoors?',
    answer:
      'Weather permitting, the ceremony and cocktail hour will be held outdoors. The reception will be held indoors but guests will have full access to the entire grounds at any time.',
  },
  {
    question: 'How do I get to the wedding venue?',
    answer: (
      <Link className={styles['link']} to='/TravelAndStay'>
        Travel & Stay Page
      </Link>
    ),
  },
  {
    question: 'Is there parking available?',
    answer:
      'Plenty of parking is available close to the entrance of the venue. Guests can also be dropped off at the entrance before parking their car.',
  },
  {
    question: 'Can I bring my kids?',
    answer:
      'Although we adore your children, due to the capacity limits at our ceremony and reception, the only children at our wedding are those in the wedding party and immediate family.',
  },
  {
    question: 'Have you booked hotel room blocks for guests?',
    answer:
      'Hotel room blocks have been reserved for our guests at the Marriott Courtyard Hotel in Norwalk. Check the travel page for more information.',
  },
  {
    question:
      'We are visiting from out of town. What can I do while we are in your wedding city?',
    answer:
      'The ceremony and reception are located 5 minutes away from downtown Stamford. Here are some links of fun things you can do while in town.',
  },
];

const QAndA = (props) => {
  const [selected, setSelected] = useState(null);

  const toggle = (i) => {
    if (selected === i) {
      return setSelected(null);
    }

    setSelected(i);
  };

  return (
    <div className=''>
      <NavBar />
      <ParallaxIMG
        strength={500}
        height={'70vh'}
        styles={{ justifyContent: 'flex-end' }}
        content={'Q&A'}
        img={img}
      />
      <div className={styles.contentWrapper}>
        <div className={styles.accordion}>
          {data.map((item, i) => {
            return (
              <div key={i} className={styles.item}>
                <div className={styles.title} onClick={() => toggle(i)}>
                  <p>{item.question}</p>
                  <AddIcon
                    className={
                      selected === i
                        ? `${styles.iconInactive}`
                        : `${styles.iconActive}`
                    }
                    sx={{ fontSize: '3rem', transition: '.5s all' }}
                  />
                </div>
                <div
                  className={
                    selected === i
                      ? `${styles.content} ${styles.show}`
                      : `${styles.content}`
                  }
                >
                  <p>{item.answer}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default QAndA;
