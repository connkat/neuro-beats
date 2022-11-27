import { useState } from "react";

import Reveal from "react-reveal/Reveal";
import Switch from "react-switch";

import Nav from "./components/Nav";
import Footer from "./components/Footer";

import song from "./audio/tonto.mp3";

import "./App.css";

function App() {
  // eslint-disable-next-line no-unused-vars
  const [audio, setAudio] = useState(new Audio(song));
  // eslint-disable-next-line no-unused-vars
  const [isSoundToggle, setIsSoundToggle] = useState(false);
  const [soundToggleChecked, setSoundToggleChecked] = useState(false);

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

  const handleSoundToggle = (checked) => {
    setSoundToggleChecked(checked);
    handleSoundToggleToggle(checked);
  };
  return (
    <div className="App">
      <Nav soundToggleToggleHandler={handleSoundToggleToggle} />
      <div className="soundToggle__mobile">
        <h2>Experience the sound:</h2>
        <Switch
          uncheckedIcon={false}
          checkedIcon={false}
          name="soundToggle"
          checked={soundToggleChecked}
          onChange={handleSoundToggle}
        />
      </div>
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
      <Reveal left delay={4000} duration={5000}>
        <div className="Section">
          <div className="video__section">
            <iframe
              width="600"
              height="350"
              src={`https://www.youtube.com/embed/_78xHMjKjvA`}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title="Embedded youtube"
            />
          </div>
          <div className="Section__text">
            <h1>Play the music of your dreams</h1>
          </div>
        </div>
      </Reveal>
      <Footer />
    </div>
  );
}

export default App;
