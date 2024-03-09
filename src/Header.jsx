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
        <h2 className="m-3 float-start">Srikant V S</h2>
        <ul className="m-3 nav justify-content-end float-end">
          <li className="nav-item" data-aos="fade-left" data-aos-delay="0">
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
                style={{ color: '#000000' }}
              />
            </a>
          </li>
          <li className="nav-item" data-aos="fade-down" data-aos-delay="0">
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
                style={{ color: '#000000' }}
              />
            </a>
          </li>
          <li className="nav-item" data-aos="fade-right" data-aos-delay="0">
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
