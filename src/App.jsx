import Reveal from "react-reveal/Reveal";

import Nav from "./components/Nav";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Nav />
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
    </div>
  );
}

export default App;
