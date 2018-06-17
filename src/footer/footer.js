import React from 'react';
import ReactTos from 'react-tos';
import { NavLink } from 'react-router-dom';

import CV from './assets/cv.svg';
import Email from './assets/email.svg';
import Github from './assets/github.svg';
import LinkedIn from './assets/linkedin.svg';
import Scholar from './assets/scholar.svg';

import './footer.css';

const scrollTop = () => {
  window.scrollTo(0, 0);
};

const Footer = () => (
  <footer
    className="footer"
    role="contentinfo"
  >
    <ReactTos
      className="footer__inner"
      config={{ startingScale: 0.95 }}
    >
      <div className="footer__item">
        <NavLink
          className="footer__link"
          onClick={scrollTop}
          to="/cv"
        >
          <img
            alt="CV"
            src={CV}
          />
        </NavLink>
        <div>
          CV
        </div>
      </div>
      <div className="footer__item">
        <a
          className="footer__link"
          href="mailto:knightjdr@gmail.com?subject=About jamesknight.ca"
        >
          <img
            alt="E-mail"
            className="footer__image"
            src={Email}
          />
        </a>
        <div>
          E-mail
        </div>
      </div>
      <div className="footer__item">
        <a
          className="footer__link"
          href="https://github.com/knightjdr"
          rel="nofollow noreferrer"
        >
          <img
            alt="GitHub"
            className="footer__image"
            src={Github}
          />
        </a>
        <div>
          GitHub
        </div>
      </div>
      <div className="footer__item">
        <a
          className="footer__link"
          href="https://scholar.google.ca/citations?user=M6Y_Y5cAAAAJ"
          rel="nofollow noreferrer"
        >
          <img
            alt="Google Scholar"
            className="footer__image"
            src={Scholar}
          />
        </a>
        <div>
          Scholar
        </div>
      </div>
      <div className="footer__item">
        <a
          className="footer__link"
          href="https://www.linkedin.com/in/james-knight-174996156"
          rel="nofollow noreferrer"
        >
          <img
            alt="LinkedIn"
            className="footer__image"
            src={LinkedIn}
          />
        </a>
        <div>
          LinkedIn
        </div>
      </div>
    </ReactTos>
    <div className="footer__copyright">
      © James Knight, 2018.
    </div>
  </footer>
);
export default Footer;
