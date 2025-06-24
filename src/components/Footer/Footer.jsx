import React from 'react';
import './Footer.css';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact">
      <div className="container">

        <div className="card footer">

          {/* Top Section */}
          <div className="section footer-top">
            <div className="footer-brand">
              
              <a href="#home" className="logo">
                <img
                  src="assets/img/Logo-Avery-white.png"
                  width="119"
                  height="37"
                  loading="lazy"
                  alt="Lucas Silva logo"
                />
              </a>

              <p className="footer-text">
                Developer focused on building web and mobile solutions using modern technologies. Passionate about performance, usability, and solving software engineering challenges.
              </p>

              <p className="footer-list-title">Location</p>
              <address className="footer-text address">
                Campinas - SP, Brazil
              </address>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="footer-bottom">

            <p className="copyright">
              &copy; {currentYear} Developed by{' '}
              <a href="#home" className="copyright-link">
                Lucas Silva.
              </a>
            </p>

            <ul className="social-list">
              <SocialLink
                href="https://www.linkedin.com/in/seu-linkedin"
                icon={<FaLinkedin />}
                label="LinkedIn"
              />
              <SocialLink
                href="https://github.com/seu-github"
                icon={<FaGithub />}
                label="Github"
              />
            </ul>

          </div>
        </div>

      </div>
    </footer>
  );
};

/* Social Link Subcomponent */
const SocialLink = ({ href, icon, label }) => (
  <li>
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="social-link"
    >
      {icon}
      <span className="span">{label}</span>
    </a>
  </li>
);

export default Footer;
