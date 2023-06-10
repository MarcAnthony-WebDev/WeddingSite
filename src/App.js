import './Styles/App.css';
import { Parallax } from 'react-parallax';
import img from './Images/SitePhotos/IMG_8073.JPG';

//components
import NavBar from './Components/Navbar';

function App() {
  return (
    <div className='App'>
      <Parallax
        style={{
          backgroundSize: '30%',
          backgroundRepeat: 'no-repeat',
        }}
        strength={600}
        bgImageSize={'30%'}
        bgImage={img}
        bgImageAlt='picture of couple'
      >
        <div className='header'>
          <NavBar />
          <div className='text-content'>Marcanthony & Marissa</div>
        </div>
      </Parallax>

      <div className='content'></div>
    </div>
  );
}

export default App;
