import React from "react";
import "./Styles/App.css";
import ParallaxIMG from "./Components/Parallax";
import MainContent from "./Components/MainContent";
//components
import NavBar from "./Components/NavBar";
import Footer from "./Components/Footer";

import img from "./Images/SitePhotos/IMG_8185.JPG";

function App() {
  const headerText = `Marcanthony & Marissa`;

  return (
    <div className="App">
      <NavBar />
      <ParallaxIMG
        position={"20% 0%"}
        bgImageStyle={{
          height: "100vh",
          width: "100vw",
          objectFit: "cover",
          objectPosition: "left",
        }}
        className="heroImg"
        img={img}
        strength={600}
        content={headerText}
      />
      <MainContent />
      <Footer />

      {/* <div className='content'></div> */}
    </div>
  );
}

export default App;
