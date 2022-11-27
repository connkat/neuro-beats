import "./Footer.css";

function Footer() {
  return (
    <div className="Footer">
      <div className="footer-logo">
        <img
          src="./images/techstars.png"
          alt="techstars"
          className="techstars"
        />
        <img
          src="./images/startup-weekend.png"
          alt="startup-weekend"
          className="startup-weekend"
        />
      </div>
      <a href="mailto:neurobeatsco@gmail.com" target="_blank" rel="noreferrer">
        <p>Contact</p>
      </a>
    </div>
  );
}

export default Footer;
