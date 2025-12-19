import "../index.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-brand">
          <div className="brand">
            <span className="logo">🍔</span>
            <span className="brand-name">Swiggy</span>
          </div>
          <p className="copyright">© 2025 Swiggy Limited</p>
        </div>

        <div className="footer-column">
          <h4>Company</h4>
          <p>About Us</p>
          <p>Swiggy Corporate</p>
          <p>Careers</p>
          <p>Team</p>
          <p>Swiggy One</p>
          <p>Swiggy Instamart</p>
          <p>Swiggy Dineout</p>
          <p>Minis</p>
          <p>Pyng</p>
        </div>

        <div className="footer-column">
          <h4>Contact us</h4>
          <p>Help & Support</p>
          <p>Partner With Us</p>
          <p>Ride With Us</p>

          <h4 className="mt">Legal</h4>
          <p>Terms & Conditions</p>
          <p>Cookie Policy</p>
          <p>Privacy Policy</p>
        </div>

        <div className="footer-column">
          <h4>Available in:</h4>
          <p>Bangalore</p>
          <p>Gurgaon</p>
          <p>Hyderabad</p>
          <p>Delhi</p>
          <p>Mumbai</p>
          <p>Pune</p>

          <select className="city-select">
            <option>685 cities</option>
          </select>
        </div>

        <div className="footer-column">
          <h4>Life at Swiggy</h4>
          <p>Explore With Swiggy</p>
          <p>Swiggy News</p>
          <p>Snackables</p>

          <h4 className="mt">Social Links</h4>
          <div className="social-icons">
            <span>
              <i className="fa fa-linkedin" aria-hidden="true"></i>
            </span>
            <span>
              <i className="fa fa-instagram" aria-hidden="true"></i>
            </span>
            <span>
              <i className="fa fa-facebook-official" aria-hidden="true"></i>
            </span>
            <span>
              <i className="fa fa-twitter-square" aria-hidden="true"></i>
            </span>
            <span>
              <i className="fa fa-youtube-play" aria-hidden="true"></i>
            </span>
          </div>
        </div>
      </div>

      <hr />

      {/* Bottom App Section */}
      {/* <div className="bot">
        <div className="footer-bottom">
          <h3>For better experience, download the Swiggy app now</h3>
          <div className="app-buttons">
            <button className="store-btn"> App Store</button>
            <button className="store-btn">▶ Google Play</button>
          </div>
        </div>
      </div> */}
    </footer>
  );
};

export default Footer;
