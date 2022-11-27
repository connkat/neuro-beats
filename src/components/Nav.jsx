import "./Nav.css";

function Nav() {
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
      <div className="contact">
        <a href="mailto:neurobeatsco@gmail.com" target="_blank" rel="noreferrer">
          Contact
        </a>
      </div>
    </div>
  );
}

export default Nav;
