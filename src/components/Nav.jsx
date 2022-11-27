import { useState } from "react";

import Switch from "react-switch";

import "./Nav.css";

function Nav({ soundToggleToggleHandler }) {
  const [soundToggleChecked, setSoundToggleChecked] = useState(false);

  const handleSoundToggle = (checked) => {
    setSoundToggleChecked(checked);
    soundToggleToggleHandler(checked);
  };
  return (
    <div className="Nav">
      <div className="nav-logo">
        <a href="/">
          <img src="./images/logo-image.png" alt="logo" className="logo" />
        </a>
      </div>
      <div className="title">
        <h1>NEUROBEATS</h1>
        <h3>CREATE MUSIC WITH YOUR BRAIN</h3>
      </div>
      <div className="soundToggle__desktop">
        <p>Experience the sound:</p>
        <Switch
          uncheckedIcon={false}
          checkedIcon={false}
          name="soundToggle"
          checked={soundToggleChecked}
          onChange={handleSoundToggle}
        />
      </div>
    </div>
  );
}

export default Nav;
