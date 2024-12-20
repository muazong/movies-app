import { Link } from "react-router-dom";

import icons from "../../assets/icons";
import "./Footer.scss";

function Footer() {
  return (
    <div className="footer">
      <div className="information">
        <div className="contact">
          <h1 className="title">Contact</h1>
          <ul className="contact-list">
            <li>
              <img src={icons.phone_icon} className="icon" alt="" />
              Phone:
              <a href="tel:+123456789" target="_blank">
                123-456-789
              </a>
            </li>
            <li>
              <img src={icons.email_icon} className="icon" alt="" />
              Email:
              <a href="email:abcxyz@example.com" target="_blank">
                abcxyz@example.com
              </a>
            </li>
            <li>
              <img src={icons.location_icon} className="icon" alt="" />
              <span>Address: 123 Street, City, Country</span>
            </li>
          </ul>
        </div>
        <div className="logo">
          <Link to="/">
            <h1>AZNG</h1>
          </Link>
        </div>
        <div className="social">
          <h1 className="title">Social</h1>
          <ul className="social-list">
            <li>
              <a href="#">
                <img src={icons.facebook_icon} className="icon" alt="" />
              </a>
            </li>
            <li>
              <a href="#">
                <img src={icons.youtube_icon} className="icon" alt="" />
              </a>
            </li>
            <li>
              <a href="#">
                <img src={icons.x_twitter_icon} className="icon" alt="" />
              </a>
            </li>
            <li>
              <a href="#">
                <img src={icons.snapchat_icon} className="icon" alt="" />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="license">
        <p className="copyright">
          Copyright &copy; {new Date().getFullYear()} AZNG
        </p>
        <div>
          <p className="policy">Privacy Policy</p>
          <p className="terms">Terms</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
