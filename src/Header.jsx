import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faLinkedin,
  faSquareGithub,
  faSquareXTwitter,
} from '@fortawesome/free-brands-svg-icons';

function Header() {
  return (
    <header>
      <div className="container clearfix">
        <h4 className="m-3 float-start">Srikant V S</h4>
        <ul className="m-3 nav justify-content-end float-end">
          <li
            className="nav-item"
            data-aos="fade-left"
            data-aos-delay="0"
            data-aos-once="true"
          >
            <a
              className="nav-link"
              href="https://linkedin.com/in/srikantvs26"
              title="linkedin"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                icon={faLinkedin}
                size="2xl"
                style={{ color: '#0077B5' }}
              />
            </a>
          </li>
          <li
            className="nav-item"
            data-aos="fade-down"
            data-aos-delay="0"
            data-aos-once="true"
          >
            <a
              className="nav-link"
              href="https://github.com/srikantvs26"
              title="github"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                icon={faSquareGithub}
                size="2xl"
                style={{ color: '#333333' }}
              />
            </a>
          </li>
          <li
            className="nav-item"
            data-aos="fade-right"
            data-aos-delay="0"
            data-aos-once="true"
          >
            <a
              className="nav-link"
              href="https://twitter.com/srikantvs26"
              title="twitter"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                icon={faSquareXTwitter}
                size="2xl"
                style={{ color: '#000000' }}
              />
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
