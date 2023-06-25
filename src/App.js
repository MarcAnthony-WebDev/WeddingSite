import './Styles/App.css';
import ParallaxIMG from './Components/Parallax';
import MainContent from './Components/MainContent';
//components
import NavBar from './Components/NavBar';
import Footer from './Components/Footer';

import img from './Images/SitePhotos/IMG_8185.JPG';

function App() {
  const headerText = `Marcanthony & Marissa`;

  return (
    <div className='App'>
      <NavBar />
      <ParallaxIMG img={img} strength={250} content={headerText} />
      <MainContent />
      <Footer />

      {/* <div className='content'></div> */}
    </div>
  );
}

export default App;
