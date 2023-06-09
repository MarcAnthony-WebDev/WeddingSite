import './Styles/App.css';
import { Parallax } from 'react-parallax';
import img from './Images/IMG_8044.jpg';

//components
import NavBar from './Components/Navbar';

function App() {
  return (
    <div className='App'>
      <Parallax strength={600} bgImage={img} bgImageAlt='picture of couple'>
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
