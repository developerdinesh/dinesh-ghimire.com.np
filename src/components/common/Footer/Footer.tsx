import React from 'react';
import './Footer.css';
const Footer: React.FC = () => {
  return (
    <footer id="footer">
      <div className="container">
        <div className="row">
        <div className="col-sm-4">
          <h3 className="footer-title">About Me</h3>
          <div className="about-me">
            <p>Experienced full-stack developer adept at delivering robust solutions across the entire software development lifecycle, with a passion for crafting efficient, user-centric applications that drive business growth.</p>
          </div>
        </div>
        <div className="col-sm-4">
        <h3 className="footer-title">Quick Links</h3>
          <ul>
            <li><a href="#">Portfolio</a></li>
            <li><a href="#">Contact Me</a></li>
            <li><a href="#">About Me</a></li>
          </ul>
        </div>
        <div className="col-sm-4">
        <h3 className="footer-title">Services</h3>
          <ul>
          <li><a href="#">Web Hosting</a></li>
          
          <li><a href="#">Software Development</a></li>
            <li><a href="#">Domain Registration</a></li>
            <li><a href="#">Mobile App Development</a></li>
            <li><a href="#">Web Application Development</a></li>
          </ul>
        </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
