import { useState } from "react";

import Reveal from "react-reveal/Reveal";

import Nav from "./components/Nav";
import Footer from "./components/Footer";

import song from "./audio/tonto.mp3";

import "./App.css";

function App() {
  const [audio, setAudio] = useState(new Audio(song));
  const [isSoundToggle, setIsSoundToggle] = useState(false);

  const handleSoundToggleToggle = (checked) => {
    if (checked) {
      audio.play();
      setIsSoundToggle(true);
    } else {
      audio.pause();
      setIsSoundToggle(false);
    }

    return checked;
  };
  return (
    <div className="App">
      <Nav soundToggleToggleHandler={handleSoundToggleToggle} />
      <Reveal left delay={100000} duration={5000}>
        <div className="Section">
          <img src="./images/emotiv.png" alt="emotiv" className="emotiv" />
          <div className="Section__text">
            <h1>Control music without lifting a finger.</h1>
          </div>
        </div>
      </Reveal>
      <Reveal right delay={4000} duration={5000}>
        <div className="Section-reverse">
          <div className="Section__text">
            <h1>Explore creativity like never before.</h1>
          </div>
          <img src="./images/brain-wave.png" alt="emotiv" className="emotiv" />
        </div>
      </Reveal>
      <Footer />
    </div>
  );
}

export default App;
