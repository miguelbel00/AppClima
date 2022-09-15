import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
import github from "../img/github.png";
import gmail from "../img/gmail(1).png";

function Footer() {
  return (
    <footer className="main-footer">
      <div className="container">
        <div className="row">
          <div className="col">
            <h4>Wheater App</h4>
            <ul className="list-unstyled">
              <li>Developed For Miguel Angel Beltran</li>
            </ul>
          </div>
          <div className="col">
            <h4>Contact</h4>
            <div>
              <a className="a-contact" href="https://github.com/miguelbel00">
                <img className="img-contact" src={github} alt="github"></img>
                Github
              </a>
              &nbsp;&nbsp;&nbsp;
              <a className="a-contact" href="www.google.com">
                <img className="img-contact" src={gmail} alt="github"></img>
                Gmail
              </a>
            </div>
          </div>
          <div className="col">
            <h4>About Me</h4>
            <Link className="footer-about-me" to={"/about"}>
              About Me
            </Link>
          </div>
        </div>
        <div className="row">
          <p className="col-sm">&copy;{new Date().getFullYear()} Weather App</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
