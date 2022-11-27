import "./Footer.css";

function Footer() {
  return (
    <div className="Footer">
      <div className="footer-logos">
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
      <div className="footer-text">
        <a
          href="mailto:neurobeatsco@gmail.com"
          target="_blank"
          rel="noreferrer"
        >
          <p>Contact</p>
        </a>
      </div>
    </div>
  );
}

export default Footer;
