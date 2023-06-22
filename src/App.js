import './Styles/App.css';
import ParallaxIMG from './Components/Parallax';
import MainContent from './Components/MainContent';
//components
import NavBar from './Components/NavBar';

function App() {
  return (
    <div className='App'>
      <NavBar />
      <ParallaxIMG />
      <MainContent />
      {/* <div className='content'></div> */}
    </div>
  );
}

export default App;
